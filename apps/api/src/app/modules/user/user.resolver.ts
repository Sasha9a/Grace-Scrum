import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserEntity } from "@scrum/shared/entities/user.entity";
import { UserService } from "@scrum/api/modules/user/user.service";
import { AuthService } from "@scrum/api/modules/user/auth.service";
import { VerifyService } from "@scrum/api/modules/verify/verify.service";
import { Inject } from "@nestjs/common";

@Resolver(() => UserEntity)
export class UserResolver {

	public constructor(@Inject(UserService) private readonly userService: UserService,
										 @Inject(AuthService) private readonly authService: AuthService,
										 @Inject(VerifyService) private readonly verifyService: VerifyService) {
	}

	@Query(() => UserEntity)
	public async findById(@Args('id') id: number) {
		return await this.userService.findById(id);
	}

	@Mutation(() => UserEntity)
	public async create() {

	}

}
