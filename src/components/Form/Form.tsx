import { Wrapper } from "./styles";

const Form = ({ children, ...rest }: FormProps) => {
	return <Wrapper {...rest}>{children}</Wrapper>;
};
export default Form;
