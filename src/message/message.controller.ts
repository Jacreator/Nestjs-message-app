import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dto/create.dto';

@Controller('message')
export class MessageController {
  @Get()
  listMessages() {}

  @Get('/:id')
  getMessage(@Param('id') id: any) {}

  @Post()
  createMessage(@Body() body: CreateMessageDTO) {}
}
