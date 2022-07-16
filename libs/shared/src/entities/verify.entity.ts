import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "@scrum/shared/entities/base.entity";
import { VerifyEmailTypeEnum } from "@scrum/shared/enums/verify.email.type.enum";
import { Column, Entity } from "typeorm";

@ObjectType()
@Entity()
export class VerifyEntity extends BaseEntity {

	@Field()
	@Column('text', { nullable: false })
	public path: string;

	@Field()
	@Column({ type: "enum", enum: VerifyEmailTypeEnum, nullable: false })
	public type: VerifyEmailTypeEnum;

	@Field()
	@Column('varchar', { length: 64, nullable: false })
	public email: string;

	@Field()
	@Column('varchar', { length: 64 })
	public oldEmail: string;

}
