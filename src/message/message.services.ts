import { Injectable } from '@nestjs/common';
// import { RepositoryInterface } from './message.interface';
import { MessageRepository } from './message.repository';

@Injectable()
export class MesseageServices {
  constructor(public messageRepo: MessageRepository) {}

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(contents: string) {
    return this.messageRepo.create(contents);
  }
}
