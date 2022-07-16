import { Expose } from "class-transformer";
import { BaseDto } from "@scrum/shared/dtos/base.dto";

@Expose()
export class FileDto extends BaseDto {

	@Expose()
	public path: string;

	@Expose()
	public name: string;

	@Expose()
	public mime: string;

	@Expose()
	public size: number;

}
