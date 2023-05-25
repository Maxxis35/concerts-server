import {Body, Controller, ExecutionContext, Get, HttpCode, HttpStatus, Post, Req, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthGuard} from "./guards/auth.guard";
import {ApiBearerAuth} from "@nestjs/swagger";
import { Request } from 'express'
import {RefreshTokenGuard} from "./guards/refreshToken.guard";
import {AccessTokenGuard} from "./guards/accessToken.guard";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    logIn(@Body() logInDto: CreateUserDto) {
        return this.authService.logIn(logInDto.email, logInDto.password)
    }

    //@UseGuards(AuthGuard)
    //@ApiBearerAuth()
    @Post('singup')
    singup(@Body() singUpDto: CreateUserDto) {
        return this.authService.singUp(singUpDto)
    }

    @UseGuards(AccessTokenGuard)
    @Get('logout')
    logout(@Req() req: Request, ){
        console.log(req)
        //return this.authService.logout(req)
    }

    @UseGuards(RefreshTokenGuard)
    @Get('refresh')
    refreshTokens(@Req() req: Request) {
        const userId = req.user['sub'];
        const refreshToken = req.user['refreshToken'];
        return this.authService.refreshTokens(userId, refreshToken);
    }





}
