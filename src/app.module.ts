import {Module, SetMetadata} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConcertsModule } from './concerts/concerts.module';
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule} from "@nestjs/config";
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`),
    UsersModule,
    ConcertsModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
