import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { MessagesModule } from './messages/messages.module';
import { ChatsModule } from './chats/chats.module';
import { FriendsModule } from './friends/friends.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGO_URL,
      }),
    }),
    UsersModule,
    MessagesModule,
    ChatsModule,
    FriendsModule,
    AuthModule,
  ],
  controllers: [AppController, MessagesController, AuthController],
  providers: [AppService, MessagesService, AuthService],
})
export class AppModule {}
