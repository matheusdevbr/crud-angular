import { Component, OnInit, ViewChild } from '@angular/core';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { LembreteService } from 'src/app/services/lembrete.service';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
