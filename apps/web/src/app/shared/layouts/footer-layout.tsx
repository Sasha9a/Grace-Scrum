import { Divider } from "primereact/divider";
import { useEffect, useState } from "react";
import moment from "moment-timezone";

export const FooterLayout = () => {
	const [footerYear, setFooterYear] = useState<string>('');
	useEffect(() => {
		if (moment().year() === 2022) {
			setFooterYear('2022');
		} else {
			setFooterYear(`2022-${moment().year()}`);
		}
	}, []);

	return (
		<footer className="mt-5">
			<Divider></Divider>
			<div className="w-full text-center my-5">
				<p className="text-lg">© { footerYear }</p>
			</div>
		</footer>
	)
}
