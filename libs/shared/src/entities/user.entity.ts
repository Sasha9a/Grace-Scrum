import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "@scrum/shared/entities/base.entity";
import { FileEntity } from "@scrum/shared/entities/file.entity";
import { RoleEnum } from "@scrum/shared/enums/role.enum";
import { Column, CreateDateColumn, Entity, OneToOne } from "typeorm";

@ObjectType()
@Entity()
export class UserEntity extends BaseEntity {

	@Field()
	@Column('varchar', { length: 64, nullable: false })
	public email: string;

	@Field()
	@Column()
	@CreateDateColumn()
	public registerDate: Date;

	@Field()
	@Column()
	public lastEntranceDate: Date;

	@Field()
	@Column('varchar', { length: 32, nullable: false })
	public login: string;

	@Field()
	@Column('varchar', { length: 50 })
	public name: string;

	@Field()
	@Column('text', { nullable: false })
	public password: string;

	@Field()
	@Column({ type: "enum", enum: RoleEnum, default: [RoleEnum.USER], array: true })
	public roles: RoleEnum[];

	@Field(() => FileEntity)
	@OneToOne(() => FileEntity)
	public avatar: FileEntity;

	@Field()
	@Column({ default: false })
	public isValidatedEmail: boolean;

	@Field()
	@Column('text')
	public token: string;

}
