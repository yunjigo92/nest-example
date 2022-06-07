import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserInfo } from './UserInfo';

@Controller('users')
export class UsersController {

    

    //회원가입 구현
    @Post()
    async createUser(@Body() dto: CreateUserDto): Promise<void>{
        console.log(dto);
    }

    //이메일 검증
    @Post('/email-verify')
    async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string>{
        console.log(dto);
        return;
    }

    //로그인
    @Post('/login')
    async login(@Body() dto:UserLoginDto): Promise<string>{
        console.log(dto);        
        return;
    }

    //특정 회원 정보 가져오기
    @Get('/:id')
    async getUserInfo(@Param('id') userId: string):Promise<UserInfo>{
        console.log(userId);
        return;
    }

}
