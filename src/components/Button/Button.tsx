import { useRef } from "react";
import { LoadingDiv, StyledButton, Wrapper } from "./styles";

/**
 * Button
 *
 * @param {Element} children - Html elements children
 * @param {Function} onClick - Function
 * @param {Number} [duration = 1000] - Duration of click animation
 * @param {String} backgroundColor - backgroundColor
 * @param {String} color -color
 * @param {String} iconActiveColor - iconActiveColor
 * @param {Boolean} disabled - disabled
 * @param {String} [variant='default'] - Button variant
 * @param {Boolean} loading - loading
 * @param {Boolean} disableClickAnimation - disableClickAnimation
 */

const Button = ({
	onClick = () => {
		console.log("click");
	},
	children,
	duration = 1000,
	backgroundColor,
	color,
	iconActiveColor,
	disabled,
	variant = "default",
	loading,
	disableClickAnimation,
	to,
	tooltip,
	target,
	...rest
}: ButtonProps) => {
	const ref = useRef();

	return (
		<Wrapper>
			<StyledButton
				{...rest}
				// onClick={handleOnClick}
				// active={active}
				// duration={duration}
				// backgroundColor={data.backgroundColor}
				// color={data.color}
				// iconActiveColor={iconActiveColor}
				// variant={data.variant}
				// disableClickAnimation={disableClickAnimation}
				// disabled={disabled || loading}
				// onMouseDown={onMouseDown}
				// tempDisabled={active || loading}
				// title={tooltip || getUrl()}
			>
				{children}
				<LoadingDiv key={"loading"} parent={ref?.current?.getBoundingClientRect()} />
			</StyledButton>
		</Wrapper>
	);
};
export default Button;
