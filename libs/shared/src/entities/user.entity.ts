import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class UserEntity {

	@Field()
	@PrimaryGeneratedColumn()
	public id: number;

	@Field()
	@Column()
	public registerDate: Date;

}
