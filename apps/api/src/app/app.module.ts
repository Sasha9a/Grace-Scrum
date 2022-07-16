import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VerifyModule } from "@scrum/api/modules/verify/verify.module";
import { LoggerMiddleware } from "@scrum/api/core/middlewares/logger.middleware";

@Module({
  imports: [
		GraphQLModule.forRoot({
			autoSchemaFile: 'schema.gql'
		}),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: '40izugob',
			database: 'scrum',
			entities: ['dist/**/*.entity.js'],
			synchronize: false
		}),
		VerifyModule
	],
  controllers: [],
  providers: []
})
export class AppModule implements NestModule {
	public configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes({
			path: '*',
			method: RequestMethod.ALL
		});
	}
}
