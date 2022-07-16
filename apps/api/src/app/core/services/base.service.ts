import { Injectable } from "@nestjs/common";
import { FindManyOptions, FindOptionsWhere, ObjectLiteral, Repository } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

@Injectable()
export abstract class BaseService<T extends ObjectLiteral> {

	protected repo: Repository<T>;

	public async create<K>(entity: K): Promise<T> {
		const createdEntity = this.repo.create(entity as any);
		return await this.repo.save(createdEntity) as unknown as Promise<T>;
	}

	public async findAll(filter?: FindManyOptions<T>): Promise<T[]> {
		return await this.repo.find(filter);
	}

	public async findById(id: number): Promise<T> {
		return await this.repo.findOneBy(<FindOptionsWhere<any>>{ id: id });
	}

	public async update<K>(id: number, entity: QueryDeepPartialEntity<K>): Promise<T> {
		return await this.repo.update(<FindOptionsWhere<any>>{ id: id }, entity as T) as unknown as T;
	}

	public async delete(id: number): Promise<T> {
		return await this.repo.delete(id) as unknown as T;
	}

}
