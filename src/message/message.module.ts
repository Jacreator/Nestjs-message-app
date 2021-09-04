import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageRepository } from './message.repository';
import { MesseageServices } from './message.services';

@Module({
  controllers: [MessageController],
  providers: [MesseageServices, MessageRepository]
})
export class MessageModule {
  

}
