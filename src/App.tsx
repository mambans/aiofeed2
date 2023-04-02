/* eslint-disable */
import styled, { ThemeProvider } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import useThemeStore from "./stores/theme/themeStore";
import { GlobalStyles } from "./themes/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useUserStore from "./stores/userStore";
import { useEffect } from "react";

const queryClient = new QueryClient();
function App() {
	const theme = useThemeStore((state) => state.theme);
	const { fetchUser } = useUserStore((state) => state);

	useEffect(() => {
		fetchUser();
	}, [fetchUser]);

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Background />
				<Wrapper className="App">
					<GlobalStyles />
					<BrowserRouter>
						<Header />
						<Routes />
						<Footer />
					</BrowserRouter>
				</Wrapper>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;

const Wrapper = styled.div`
	position: relative;
	color: ${({ theme }) => theme.colors.text};
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;

	*:not(input) {
		color: ${({ theme }) => theme.colors.text};
	}
`;
const Background = styled.div`
	position: fixed;
	inset: 0;

	background-color: ${({ theme }) => theme.colors.primary};
	background-image: repeating-radial-gradient(circle at 0px 0px, rgba(0, 0, 0, 0) 0px, rgba(40, 50, 66, 0.1) 1000px),
		repeating-linear-gradient(rgba(43, 46, 48, 0.33), rgb(43, 46, 48));
`;
