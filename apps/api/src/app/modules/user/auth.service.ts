import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserEntity } from "@scrum/shared/entities/user.entity";

@Injectable()
export class AuthService {

	public constructor(private readonly jwtService: JwtService) {
	}

	public async login(user: UserEntity): Promise<{ accessToken: string }> {
		const payload = { user: { id: user.id, email: user.email, roles: user.roles } };
		return {
			accessToken: this.jwtService.sign(payload)
		};
	}

}
