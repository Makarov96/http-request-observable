
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from "rxjs/operators";
import { Observable, Subject } from 'rxjs';
import * as socketIo from 'socket.io-client';
import {Event} from '../../app/notificaciones/client.enums'

@Injectable({
  providedIn: 'root'
})


export class NotificationService {
  private socket;

  private  SERVER_URL = 'https://36da9157.ngrok.io';
  public initSocket(): void {
      this.socket = socketIo(this.SERVER_URL);
  }

  public send(message: any): void {
      this.socket.emit('notification', message);
  }

  public onMessage(): Observable<any> {
      return new Observable<any>(observer => {
          this.socket.on('notification', (data: any) => observer.next(data));
      });
  }

  public onEvent(event: Event): Observable<any> {
      return new Observable<Event>(observer => {
          this.socket.on(event, () => observer.next());
      });
    }
}
