import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { json } from 'express';
import { CreateMessageDTO } from './dto/create.dto';
import { MesseageServices } from './message.services';
import { RepositoryInterface } from './message.interface';
import { MessageRepository } from './message.repository';

@Controller('message')
export class MessageController {
  constructor(public messageServ: MesseageServices) {}

  @Get()
  listMessages() {
    return this.messageServ.findAll();
  }

  @Get('/:id')
  getMessage(@Param('id') id: any) {
    const message = this.messageServ.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return message;
  }

  @Post()
  createMessage(@Body() body: CreateMessageDTO) {
    return this.messageServ.create(body.content);
  }
}
