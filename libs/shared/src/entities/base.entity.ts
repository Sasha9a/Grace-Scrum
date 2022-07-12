import { Field } from "@nestjs/graphql";
import { PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity {

	@Field()
	@PrimaryGeneratedColumn()
	public id: number;

}
