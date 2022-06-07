
/*
 회원가입 요청 중 이름, 이메일, 패스워드를 받는 dto
*/
export class CreateUserDto{
    readonly name: string;
    readonly email: string;
    readonly password: string;
}


/* 
 이메일 유효성 체크 dto
*/
export class VerifyEmailDto {
    signupVerifyToken: string;
}


/* 
 사용자 로그인 시 받는 dto
*/
export class UserLoginDto {
    email: string;
    password: string;
}
