import { create } from "zustand";

interface NavbarStore {
	user?: any;
	loading: boolean;
	open: boolean;
	error: string | null | undefined | any;
	toggle: (open: boolean) => void;
	close: () => void;
}

const useNavbarStore = create<NavbarStore>((set, get) => ({
	open: false,
	loading: true,
	error: null,
	toggle: () => {
		// console.log("toggle:");
		// console.log("!get().open:", !get().open);
		set({ open: !get().open });
	},
	close: () => {
		set({ open: false });
	},
}));

export default useNavbarStore;
