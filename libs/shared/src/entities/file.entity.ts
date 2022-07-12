import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "@scrum/shared/entities/base.entity";
import { Column, Entity } from "typeorm";

@ObjectType()
@Entity()
export class FileEntity extends BaseEntity {

	@Field()
	@Column('text', { nullable: false })
	public path: string;

	@Field()
	@Column('text')
	public name: string;

	@Field()
	@Column('text')
	public mime: string;

	@Field()
	@Column()
	public size: number;

}
