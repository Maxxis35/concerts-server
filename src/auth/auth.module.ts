import {forwardRef, Module, SetMetadata} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";
import {AccessTokenStrategy} from "./strategies/accessToket.strategy";
import {RefreshTokenStrategy} from "./strategies/refreshToken.strategy";

@Module({
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy],
  controllers: [AuthController],
  imports: [forwardRef(()=> UsersModule),
    JwtModule.register({
      global: true,
  })],
  exports:[AuthService]

})
export class AuthModule {}
