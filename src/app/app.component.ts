import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BH Trade Market';
  tareas = [
    {'id': '01', titulo: 'Tarea 01', descripcion: 'App Aeroméxico', estado : 'Revisión', 'fecha': '5/08/2024' },
    {'id': '02', titulo: 'Tarea 02', descripcion: 'App Liverpool', estado : 'En curso', 'fecha': '15/08/2024' },
    {'id': '03', titulo: 'Tarea 03', descripcion: 'App Monster Energy', estado : 'Pediente', 'fecha': '25/08/2024' }
  ];

  model:any= {};
  model2:any= {};

  addTarea():void{
    this.tareas.push(this.model);
  }

  deleteTarea():void{
  }

  editarTarea():void{
  }

  updateTarea():void{

  }

}



