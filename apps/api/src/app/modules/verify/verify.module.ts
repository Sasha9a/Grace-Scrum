import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VerifyEntity } from "@scrum/shared/entities/verify.entity";
import { VerifyService } from "@scrum/api/modules/verify/verify.service";
import { VerifyResolver } from "@scrum/api/modules/verify/verify.resolver";

@Module({
	imports: [TypeOrmModule.forFeature([VerifyEntity])],
	providers: [VerifyService, VerifyResolver],
})
export class VerifyModule {}
