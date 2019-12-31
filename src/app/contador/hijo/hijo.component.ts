import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { AppState } from 'src/app/app.interfaces.reducers';
import { MULTIPLICAR, MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.select('contador')
      .subscribe(contador => this.contador = contador);
  }

  multiplicar() {
    const accion = new MultiplicarAction(4);
    this.store.dispatch(accion);
  }

  dividir() {
    const accion = new DividirAction(2);
    this.store.dispatch(accion);
  }

  resetContador(value) {
    // this.cambioContador.emit(value);
    this.contador = value;
  }


}
