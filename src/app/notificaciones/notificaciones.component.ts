import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../Services/ServicesNotificaciones/notification.service'
import {Event} from './client.enums'
import { Router } from '@angular/router';


@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {

 private notifys: any;
  private messages: any[] = [];
  private messageContent: string;
  private ioConnection: any;

  constructor(
    private _Notification: NotificationService,
    private routes: Router
  ) { }

  ngOnInit() {
    this.initIoConnection();
  }


  private initIoConnection(): void {
    this._Notification.initSocket();

    this.ioConnection = this._Notification.onMessage()
      .subscribe((message: any) => {
        this.messages.push(message);
        this.notifys=  message.users
       let usuario = JSON.parse(localStorage.getItem("usuario"));
        if(usuario.Persona_Id != this.notifys[0].Persona_Id_Fk){

        

        }


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



}

/*

Persona_Id_Fk: 1
​
id_notificacion: 1
​
mensaje: "Test"
*/








