import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/validationSchema';


@Module({
  imports: [UsersModule, EmailModule, ConfigModule.forRoot({
        envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
        load: [emailConfig],
        isGlobal: true,
        validationSchema
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
