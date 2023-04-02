interface InputProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	error?: FieldError | string | null | undefined;
	label?: string | null | undefined;
	type?: string | null | undefined;
}
