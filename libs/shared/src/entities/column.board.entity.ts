import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "@scrum/shared/entities/base.entity";
import { BoardEntity } from "@scrum/shared/entities/board.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@ObjectType()
@Entity()
export class ColumnBoardEntity extends BaseEntity {

	@Field()
	@Column('varchar', { length: 50, nullable: false })
	public name: string;

	@Field()
	@Column({ nullable: false })
	public order: number;

	@Field()
	@Column('varchar', { length: 7 })
	public color: string;

	@Field()
	@Column('varchar', { length: 7 })
	public backgroundColor: string;

	@Field(() => BoardEntity)
	@ManyToOne(() => BoardEntity)
	public board: BoardEntity;

}
