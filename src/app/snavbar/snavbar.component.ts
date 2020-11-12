import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../notificaciones/client.enums';
import { NotificationService } from '../../Services/ServicesNotificaciones/notification.service'

@Component({
  selector: 'app-snavbar',
  templateUrl: './snavbar.component.html',
  styleUrls: ['./snavbar.component.css']
})
export class SnavbarComponent implements OnInit {

  data:any;
  private messages: any[] = [];
  private messageContent: string;
  private ioConnection: any;
  public notification: number;
  constructor(
    private _Notification: NotificationService,
    private router: Router
    
  ) {

    this.data=1;
  }

  ngOnInit() {
    this.initIoConnection()

  }



  private initIoConnection(): void {
    this._Notification.initSocket();

    this.ioConnection = this._Notification.onMessage()
      .subscribe((message: any) => {
        this.messages.push(message);
        this.notification= message.users.length
        console.log(message.users.length)

      });

    this._Notification.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this._Notification.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }





  cambiarVista(Datorecivido) {
    this.data = Datorecivido
  }

  Salir() {

    localStorage.clear();
    this.router.navigate(['Home']);

  }

}
