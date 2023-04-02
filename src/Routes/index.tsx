import React from "react";
import { Navigate, Routes as ReactRoutes, Route } from "react-router-dom";
import { Wrapper } from "./style";
import Home from "@/Pages/Home";
// import Login from "@/modals/Login";
import About from "@/Pages/About";
import useUserStore from "@/stores/userStore";

export const routes = [
	{ title: "Home", path: "/", element: <Home />, index: true, authProtected: false },
	{ title: "Home", path: "/home", element: <Home />, index: true, authProtected: false, navbar: true },
	// { title: "Login", path: "/login", element: <Login />, authProtected: false, navbar: true },
	{ title: "About", path: "/about", element: <About />, authProtected: true, navbar: true },
];

const Routes = () => {
	const { user, loading } = useUserStore();
	console.log("user:", user);
	console.log("loading:", loading);

	return (
		<Wrapper>
			<ReactRoutes>
				{routes.map(({ element, authProtected, ...rest }, key) => {
					return (
						<Route
							{...rest}
							key={key}
							element={authProtected ? loading ? <div>Loading</div> : !user ? <Navigate to="/home" replace /> : element : element}
						/>
					);
				})}
			</ReactRoutes>
		</Wrapper>
	);
};
export default Routes;
