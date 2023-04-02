import { Wrapper } from "./styles";

const InlineError = ({ children, style }: InlineErrorProps) => {
	if (!children) return null;
	return <Wrapper style={style}>{children}</Wrapper>;
};

export default InlineError;
