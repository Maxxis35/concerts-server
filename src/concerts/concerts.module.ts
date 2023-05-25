import {forwardRef, Module} from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { ConcertsController } from './concerts.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Concert, ConcertSchema} from "./conserts.schema";
import {User, UserSchema} from "../users/user.schema";
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [MongooseModule.forFeature([
      {name: Concert.name, schema: ConcertSchema},
      {name: User.name, schema: UserSchema}
  ]),
      forwardRef(()=> AuthModule)],
  controllers: [ConcertsController],
  providers: [ConcertsService],
    exports: [ ConcertsService,]
})
export class ConcertsModule {}
