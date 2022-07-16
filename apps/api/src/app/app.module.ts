import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";

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
		})
	],
  controllers: [],
  providers: []
})
export class AppModule {}
