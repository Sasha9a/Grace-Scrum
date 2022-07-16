import { Injectable } from "@nestjs/common";
import { BaseService } from "@scrum/api/core/services/base.service";
import { UserEntity } from "@scrum/shared/entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserService extends BaseService<UserEntity> {

	public constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {
		super();
	}

	public async findByEmail(email: string): Promise<UserEntity> {
		return await this.userRepository.findOne({ where: { email: email } });
	}

	public async findByLogin(login: string): Promise<UserEntity> {
		return await this.userRepository.findOne({ where: { login: login } });
	}

	public async findByToken(token: string): Promise<UserEntity> {
		return await this.userRepository.findOne({ where: { token: token } });
	}

	public async setToken(id: number, token: string): Promise<any> {
		return await this.userRepository.update({ id: id }, { token: token });
	}

	public async logout(id: number): Promise<any> {
		return await this.userRepository.update({ id: id }, { token: null });
	}

}
