import { Expose, Type } from "class-transformer";
import { BoardDto } from "@scrum/shared/dtos/board/board.dto";
import { BaseDto } from "@scrum/shared/dtos/base.dto";

@Expose()
export class SprintDto extends BaseDto {

	@Expose()
	public name: string;

	@Expose()
	@Type(() => BoardDto)
	public board: BoardDto;

	@Expose()
	public startDate: Date;

	@Expose()
	public endDate: Date;

	@Expose()
	public isCompleted: boolean;

}
