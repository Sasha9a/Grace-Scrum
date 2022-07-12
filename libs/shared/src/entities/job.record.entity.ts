import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "@scrum/shared/entities/base.entity";
import { BoardEntity } from "@scrum/shared/entities/board.entity";
import { SprintEntity } from "@scrum/shared/entities/sprint.entity";
import { TaskEntity } from "@scrum/shared/entities/task.entity";
import { UserEntity } from "@scrum/shared/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne } from "typeorm";

@ObjectType()
@Entity()
export class JobRecordEntity extends BaseEntity {

	@Field(() => UserEntity, { nullable: false })
	@ManyToOne(() => UserEntity)
	public user: UserEntity;

	@Field(() => TaskEntity, { nullable: false })
	@ManyToOne(() => TaskEntity)
	public task: TaskEntity;

	@Field(() => BoardEntity, { nullable: false })
	@ManyToOne(() => BoardEntity)
	public board: BoardEntity;

	@Field(() => SprintEntity, { nullable: false })
	@ManyToOne(() => SprintEntity)
	public sprint: SprintEntity;

	@Field()
	@Column()
	@CreateDateColumn()
	public date: Date;

	@Field()
	@Column({ nullable: false })
	public timeWork: number;

}
