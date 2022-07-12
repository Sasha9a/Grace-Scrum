import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "@scrum/shared/entities/base.entity";
import { BoardEntity } from "@scrum/shared/entities/board.entity";
import { ColumnBoardEntity } from "@scrum/shared/entities/column.board.entity";
import { FileEntity } from "@scrum/shared/entities/file.entity";
import { SprintEntity } from "@scrum/shared/entities/sprint.entity";
import { UserEntity } from "@scrum/shared/entities/user.entity";
import { TaskPriorityEnum } from "@scrum/shared/enums/task.priority.enum";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class TaskEntity extends BaseEntity {

	@Field()
	@Column({ nullable: false })
	public number: number;

	@Field()
	@Column('varchar', { length: 200, nullable: false })
	public name: string;

	@Field(() => BoardEntity, { nullable: false })
	@ManyToOne(() => BoardEntity)
	public board: BoardEntity;

	@Field(() => ColumnBoardEntity, { nullable: false })
	@ManyToOne(() => ColumnBoardEntity)
	public status: ColumnBoardEntity;

	@Field(() => UserEntity, { nullable: false })
	@ManyToOne(() => UserEntity)
	public createdUser: UserEntity;

	@Field(() => UserEntity, { nullable: false })
	@ManyToOne(() => UserEntity)
	public executor: UserEntity;

	@Field(() => SprintEntity)
	@ManyToOne(() => SprintEntity)
	public sprint: SprintEntity;

	@Field()
	@Column()
	@CreateDateColumn()
	public createDate: Date;

	@Field()
	@Column()
	@UpdateDateColumn()
	public updateDate: Date;

	@Field()
	@Column({ type: "enum", enum: TaskPriorityEnum, nullable: false })
	public priority: TaskPriorityEnum;

	@Field(() => [FileEntity])
	@ManyToMany(() => FileEntity)
	public files: FileEntity[];

	@Field()
	@Column()
	public grade: number;

	@Field()
	@Column()
	public left: number;

	@Field()
	@Column({ default: 0 })
	public spent: number;

	@Field()
	@Column('text')
	public description: string;

}
