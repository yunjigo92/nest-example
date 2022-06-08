import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { EmailService } from './email/email.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [AppService, EmailService],
})
export class AppModule {}
