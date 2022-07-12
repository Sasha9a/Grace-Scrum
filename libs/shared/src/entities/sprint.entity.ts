import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "@scrum/shared/entities/base.entity";
import { BoardEntity } from "@scrum/shared/entities/board.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@ObjectType()
@Entity()
export class SprintEntity extends BaseEntity {

	@Field()
	@Column('varchar', { length: 60, nullable: false })
	public name: string;

	@Field(() => BoardEntity, { nullable: false })
	@ManyToOne(() => BoardEntity)
	public board: BoardEntity;

	@Field()
	@Column()
	public startDate: Date;

	@Field()
	@Column()
	public endDate: Date;

	@Field()
	@Column({ default: false })
	public isCompleted: boolean;

}
