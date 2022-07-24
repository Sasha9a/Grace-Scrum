import { useState } from "react";
import { MenuItem } from "primereact/menuitem";
import { FileDto } from "@scrum/shared/dtos/file.dto";
import { Subscription } from "rxjs";

export const HeaderLayout = () => {
	const [menuHeader, setMenuHeader] = useState<MenuItem[]>([]);
	const [userAvatar, setUserAvatar] = useState<{ name: string, login: string, file?: FileDto }>();

	let header$: Subscription;
}
