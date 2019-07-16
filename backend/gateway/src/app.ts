import { NestModule, MiddlewareConsumer, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from '@aunited/users'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'db',
      database: process.env.DB_NAME || 'au',
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      entities: [
        '../**/src/**/entities/**.ts',
      ],
      migrations: [
        '../**/migrations/**.ts',
      ],
      migrationsRun: false,
      synchronize: true,
      logging: false,
    }),
    UsersModule,
  ]
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // TODO: connect middleware here
  }
}
