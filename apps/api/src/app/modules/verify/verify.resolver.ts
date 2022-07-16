import { Args, Query, Resolver } from "@nestjs/graphql";
import { VerifyEntity } from "@scrum/shared/entities/verify.entity";
import { Inject } from "@nestjs/common";
import { VerifyService } from "@scrum/api/modules/verify/verify.service";

@Resolver(() => VerifyEntity)
export class VerifyResolver {

	public constructor(@Inject(VerifyService) private readonly verifyService: VerifyService) {
	}

	@Query(() => VerifyEntity)
	public async findById(@Args('id') id: number): Promise<VerifyEntity> {
		return await this.verifyService.findById(id);
	}

}
