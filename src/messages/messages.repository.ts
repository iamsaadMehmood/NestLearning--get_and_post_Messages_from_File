// import {  } from 'fs';
import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
@Injectable()
export class MessagesRepository {
  findOne = async (id: string) => {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  };
  findAll = async () => {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  };
  create = async (content: string) => {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);
    const createdDate = new Date().toUTCString();
    messages[id] = { id, content, createdDate };
    await writeFile('messages.json', JSON.stringify(messages));
  };
}
