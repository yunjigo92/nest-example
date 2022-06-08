import { Injectable } from '@nestjs/common';
import Mail from 'nodemailer/lib/mailer';
import * as nodemailer from 'nodemailer';



interface EmailOptions{
    to: string;
    subject: string;
    html: string;
}


@Injectable()
export class EmailService {

    private transporter: Mail;

    constructor(){
        this.transporter  = nodemailer.createTransport(
            {
                service : 'Gmail',
                auth : {
                    user : 'wlslyy0909@gmail.com', //TODO config
                    pass : 'rhwlsgus223!' //TODO config
                }
            }
        );
    }


    async sendMemberJoinVerification(emailAddress: string, signupVerifyToken: string){
        const baseurl = 'http://localhost:3000'; // TODO config

        const url = `${baseurl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

        const mailOptions: EmailOptions = {
            to: emailAddress,
            subject: '가입인증메일',
            html: `
            가입확인 버튼를 누르시면 가입 인증이 완료됩니다.<br/>
            <form action="${url}" method="POST">
              <button>가입확인</button>
            </form>
          `
        }
        return await this.transporter.sendMail(mailOptions);
    }

}
