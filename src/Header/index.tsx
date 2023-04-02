import { HeaderWrapper } from "./style";
import { NavLink } from "react-router-dom";
import { routes } from "@/Routes";
import useUserStore from "@/stores/userStore";
import useNavbarStore from "@/stores/useNavbarStore";
import UserModal from "@/modals/User";

const Header = () => {
	const user = useUserStore((state) => state.user);
	const { toggle } = useNavbarStore((state) => state);

	return (
		<HeaderWrapper>
			{routes
				.filter(({ authProtected, navbar }) => {
					return (!authProtected || (authProtected && user)) && navbar;
				})
				.map(({ path, title }) => {
					return (
						<NavLink key={path} to={path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
							{title}
						</NavLink>
					);
				})}

			<button onClick={toggle}>Login</button>

			<UserModal />
		</HeaderWrapper>
	);
};
export default Header;
