import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs';
import * as Rx from 'rxjs'
import { map } from "rxjs/operators";

@Injectable()
export class ChatService {

  messages: Rx.Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService) {
    this.messages = <Rx.Subject<any>>wsService
      .connect().pipe(map((response: any): any => {
        return response;
      }))
  }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    this.messages.next(msg);
  }

}