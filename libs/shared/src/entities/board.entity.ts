import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "@scrum/shared/entities/base.entity";
import { ColumnBoardEntity } from "@scrum/shared/entities/column.board.entity";
import { SprintEntity } from "@scrum/shared/entities/sprint.entity";
import { UserEntity } from "@scrum/shared/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany } from "typeorm";

@ObjectType()
@Entity()
export class BoardEntity extends BaseEntity {

	@Field()
	@Column('varchar', { length: 50, nullable: false })
	public name: string;

	@Field()
	@Column('varchar', { length: 5, nullable: false })
	public code: string;

	@Field()
	@Column({ default: 1 })
	public indexTaskNumber: number;

	@Field(() => [SprintEntity])
	@OneToMany(() => SprintEntity, sprint => sprint.board)
	public activeSprints: SprintEntity[];

	@Field()
	@Column()
	@CreateDateColumn()
	public createDate: Date;

	@Field(() => UserEntity, { nullable: false })
	@ManyToOne(() => UserEntity)
	public createdUser: UserEntity;

	@Field(() => [UserEntity])
	@ManyToMany(() => UserEntity)
	public users: UserEntity[];

	@Field(() => [ColumnBoardEntity])
	@OneToMany(() => ColumnBoardEntity, column => column.board)
	public columns: ColumnBoardEntity[];

}
