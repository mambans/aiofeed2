import InlineError from "../InlineError/InlineError";
import { StyledInput, StyledLabel, Wrapper, StyledInputWrapper, StyledInputPrefixError } from "./styles";
import React from "react";

const Input = React.forwardRef(({ label, error, autoComplete = false, ...rest }: InputProps, ref) => {
	const err = (() => {
		if (typeof error === "object") {
			if (!error) return null;
			if (error?.message) return error?.message;

			switch (error.type) {
				case "required":
					if (typeof error.type === "boolean") return `${label} ìs requried`;
					return error.type;
				default:
					return error.type;
			}
		}
		return error;
	})();
	return (
		<Wrapper>
			{label && <StyledLabel>{label}</StyledLabel>}
			<StyledInputWrapper>
				<StyledInputPrefixError error={err}>
					<span>{err}</span>
				</StyledInputPrefixError>
				<StyledInput autoComplete={autoComplete} {...rest} ref={ref}></StyledInput>
			</StyledInputWrapper>
			{/* {err && <InlineError style={{ fontSize: "0.8rem" }}>{err}</InlineError>} */}
		</Wrapper>
	);
});
export default Input;
