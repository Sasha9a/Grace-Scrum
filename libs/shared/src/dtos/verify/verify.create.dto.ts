import { VerifyEmailTypeEnum } from "@scrum/shared/enums/verify.email.type.enum";
import { Expose } from "class-transformer";
import { IsEmail, IsOptional } from "class-validator";
import { Field, InputType } from "@nestjs/graphql";

@Expose()
@InputType()
export class VerifyCreateDto {

	@Field()
	@Expose()
	@IsOptional()
	public path?: string;

	@Field()
	@Expose()
	public type?: VerifyEmailTypeEnum;

	@Field()
	@Expose()
	@IsEmail({ message: "Введите почту" })
	public email: string;

	@Field()
	@Expose()
	@IsOptional()
	public oldEmail?: string;

}
