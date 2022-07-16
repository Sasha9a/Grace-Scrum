import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { VerifyEntity } from "@scrum/shared/entities/verify.entity";
import { Repository } from "typeorm";
import { BaseService } from "@scrum/api/core/services/base.service";

@Injectable()
export class VerifyService extends BaseService<VerifyEntity> {

	public constructor(@InjectRepository(VerifyEntity) private readonly verifyRepository: Repository<VerifyEntity>) {
		super();
	}

	public async findByEmail(email: string): Promise<VerifyEntity | null> {
		return await this.verifyRepository.findOne({ where: { email: email } });
	}

	public async findByPath(path: string): Promise<VerifyEntity | null> {
		return await this.verifyRepository.findOne({ where: { path: path } });
	}

}
