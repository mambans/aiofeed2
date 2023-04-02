import Input from "@/components/input/Input";
import { Wrapper } from "./styles";
import Button from "@/components/Button/Button";
import useUserStore from "@/stores/userStore";
import InlineError from "@/components/InlineError/InlineError";
import Form from "@/components/Form/Form";
import useNavbarStore from "@/stores/useNavbarStore";
import Modal from "@/components/Modal/Modal";
import { useForm } from "react-hook-form";

const UserModal = () => {
	const { user, error, loading, signIn, ...rest } = useUserStore((state) => state);
	const { open, toggle, close } = useNavbarStore((state) => state);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	console.log("errors:", errors);
	// console.log("opennn:", open);
	// console.log("error:", error);
	// console.log("rest:", rest);
	// console.log("userrr:", user);
	// console.log("loading:", loading);

	// const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
	const onSubmit = (data) => {
		console.log("handleSubmit:");
		console.log("data:", data);

		// const username = event.target.username.value;
		// console.log("username:", username);
		// const password = event.target.password.value;
		// console.log("password:", password);

		// signIn({ username, password });
	};

	const onErrors = (errors) => console.error(errors);

	const content = (() => {
		// if (!user) {
		return (
			<Wrapper>
				<h2>Login</h2>
				<Form
					// onSubmit={onSubmit}
					onSubmit={handleSubmit(onSubmit, onErrors)}
				>
					<Input type="text" label="Username" {...register("username", { required: true })} placeholder="username.." error={errors?.username} />
					<Input label="Password" {...register("password", { required: true })} placeholder="password.." type="password" error={errors?.password} />
					<Button type="submit">Login</Button>
					<InlineError>{error}</InlineError>
				</Form>
			</Wrapper>
		);
		// }
	})();

	return (
		<Modal title="Dialog modal example" isOpen={open} onClose={close}>
			{content}
		</Modal>
	);
};
export default UserModal;
