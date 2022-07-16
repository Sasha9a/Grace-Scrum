import { VerifyEmailTypeEnum } from "@scrum/shared/enums/verify.email.type.enum";
import { Expose } from "class-transformer";
import { BaseDto } from "@scrum/shared/dtos/base.dto";

@Expose()
export class VerifyDto extends BaseDto {

	@Expose()
	public path: string;

	@Expose()
	public type: VerifyEmailTypeEnum;

	@Expose()
	public email: string;

	@Expose()
	public oldEmail: string;

}
