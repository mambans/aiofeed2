export const getLocalstorage = (name: string): any => {
	const item: any = localStorage.getItem(name);
	try {
		const itemParsed = JSON.parse(item);

		if (itemParsed === "null") return null;
		if (itemParsed === "NaN") return NaN;
		if (itemParsed === "undefined") return undefined;
		return itemParsed;
	} catch (error) {
		if (item === "null") return null;
		if (item === "NaN") return NaN;
		if (item === "undefined") return undefined;
		return item;
	}
};

export const setLocalStorage = (name: string, data: any): any => {
	try {
		localStorage.setItem(name, typeof finallValue === "string" ? data : JSON.stringify(data));
		return data;
	} catch (error) {
		console.warn(`setLocalStorage - ${name}: `, error);
	}
};

export const convertArrayToObject = (array: any[], key: string) => {
	const initialValue = {};
	return array.reduce((obj, item) => {
		return {
			...obj,
			[item[key]]: item,
		};
	}, initialValue);
};

export const askForBrowserNotificationPermission = async () => {
	if (Notification && Notification.permission === "default") {
		const result = await Notification.requestPermission();
		console.log("Notifications: ", result);
		// if (result === "granted") toast.success("Notifications allowed");
		// if (result === "denied") toast.success("Notifications blocked");
		return result;
	}
};

// export const msToHMS = (ms) => {
//   const duration = moment.duration(ms);
//   const hours = duration.hours() ? `${duration.hours()}h` : '';
//   const minutes = duration.minutes() || duration.minutes() ? ` ${duration.minutes()}m` : '';
//   const seconds = duration.seconds() ? ` ${duration.seconds()}s` : '';
//   const HMS = `${hours}${minutes}${seconds}`;
//   return HMS;
// };

// export const msToHMS = (ms) => {
// 	if (!ms) return "-";
// 	const duration = moment.duration(ms);

// 	const hm = duration
// 		.format("h[h] m[m] s[s]")
// 		//removes suffixes if there are 0 or nothing
// 		.replace(" h", "h")
// 		.replace(" m", "m")
// 		.replace(" 0m", "")
// 		.replace(" 0s", "");
// 	if (!hm) return duration.format("s [s]");
// 	return hm;
// 	// console.log('duration:', duration);
// 	// const days = duration.hours() ? `${duration.hours()}h` : '';
// 	// const hours = duration.hours() ? `${duration.hours()}h` : '';
// 	// console.log('hours:', hours);
// 	// const minutes = duration.minutes() || duration.minutes() ? ` ${duration.minutes()}m` : '';
// 	// console.log('minutes:', minutes);
// 	// const seconds = duration.seconds() ? ` ${duration.seconds()}s` : '';
// 	// console.log('seconds:', seconds);
// 	// const HMS = `${hours}${minutes}${seconds}`;
// 	// return HMS;
// };
