import { FileDto } from "@scrum/shared/dtos/file.dto";
import { Avatar, AvatarShapeType, AvatarSizeType } from "primereact/avatar";
import { ApiUrl } from "@scrum/web/core/services/utils/api-url";

type UserAvatarProps = {
	user: { name: string, login: string, file?: FileDto },
	size: AvatarSizeType,
	shape: AvatarShapeType
};

const defaultProps: UserAvatarProps = {
	user: null,
	size: 'large',
	shape: 'circle'
};

export const UserAvatar = (props: UserAvatarProps) => {

	const userLabel = (): string => {
		if (props.user?.name) {
			const [firstName, secondName] = (props.user?.name || '').split(' ');
			return (firstName ? firstName[0] : '') + (secondName ? secondName[0] : '');
		} else {
			return props.user?.login ? props.user.login.substring(0, 2).toUpperCase() : '';
		}
	};

	return (
		<div>
			{ props.user ? <Avatar image={ApiUrl('file/' + props.user?.file)} size={props.size} shape={props.shape} />
				: <Avatar size={props.size} shape={props.shape} label={userLabel()} style={{ backgroundColor: 'var(--primary-600)', color: '#ffffff' }} />
			}
		</div>
	);
}

UserAvatar.defaultProps = defaultProps;
