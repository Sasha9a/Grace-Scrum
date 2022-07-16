import { Expose, Type } from "class-transformer";
import { BaseDto } from "@scrum/shared/dtos/base.dto";
import { BoardDto } from "@scrum/shared/dtos/board/board.dto";

@Expose()
export class ColumnBoardDto extends BaseDto {

	@Expose()
	public name: string;

	@Expose()
	public order: number;

	@Expose()
	public color: string;

	@Expose()
	public backgroundColor: string;

	@Expose()
	@Type(() => BoardDto)
	public board: BoardDto;

}
