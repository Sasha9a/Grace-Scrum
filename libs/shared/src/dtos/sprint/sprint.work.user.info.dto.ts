import { Expose, Type } from "class-transformer";
import { UserDto } from "@scrum/shared/dtos/user/user.dto";

@Expose()
export class SprintWorkUserInfoDto {

	@Expose()
	@Type(() => UserDto)
	public user?: UserDto;

	@Expose()
	public count: number;

	@Expose()
	public grade: number;

	@Expose()
	public left: number;

}
