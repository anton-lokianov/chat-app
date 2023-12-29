import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectConnection() private readonly mongoConnection: Connection,
  ) {
    console.log(
      `MongoDB connected: ${this.mongoConnection.name} - ${this.mongoConnection.readyState} `,
    );
  }

  getHello(): string {
    return 'Hello to my NestJS server!';
  }
}
