import { Expose } from "class-transformer";
import { IsDefined, IsOptional, IsString } from "class-validator";

@Expose()
export class ReportBoardQueryParamsDto {

	@Expose()
	@IsDefined({ message: "Не выбрана дата начала периода" })
	public from: Date;

	@Expose()
	@IsDefined({ message: "Не выбрана дата конца периода" })
	public to: Date;

	@Expose()
	@IsString({ message: "Не выбрана доска" })
	public board: number;

	@Expose()
	@IsOptional()
	public userIds?: number[];

	@Expose()
	@IsOptional()
	public sprintIds?: number[];

	@Expose()
	@IsOptional()
	public taskIds?: number[];

}
