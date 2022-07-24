import { useEffect, useState } from "react";
import { MenuItem } from "primereact/menuitem";
import { FileDto } from "@scrum/shared/dtos/file.dto";
import { Subscription } from "rxjs";
import { useNavigate } from "react-router-dom";

export const HeaderLayout = () => {
	const [menuHeader, setMenuHeader] = useState<MenuItem[]>([]);
	const [userAvatar, setUserAvatar] = useState<{ name: string, login: string, file?: FileDto }>();

	let header$: Subscription;
	const navigate = useNavigate();

	useEffect(() => {
		loadMenu();
	});

	const loadMenu = () => {
		setMenuHeader([
			{
				label: 'Доски',
				command: () => {
					navigate('/board');
				}
			},
			{
				label: 'Настройки',
				command: () => {
					navigate('/user/settings');
				}
			},
			{
				separator: true
			},
			{
				label: 'Выйти',
				command: () => {
					this.authService.logout(location.pathname);
				}
			}
		]);
	}
}
