import { Injectable } from "@nestjs/common";
import { readFile, readFileSync, writeFile, writeFileSync } from "fs";

@Injectable()
export class MessageRepository {
    findOne(id: string) {
        const message = this.getMessage();
        return message[id];
    }

    findAll() {
        return this.getMessage()
    }

    create(content: string) {
        const message = this.getMessage();
        const id = Math.floor(Math.random() * 999);
        message[id] = { id, content}

        writeFileSync('message.json', JSON.stringify(message));
    }

    getMessage() {
        const contents = readFileSync('message.json', 'utf-8');
        return JSON.parse(contents);
    }
}