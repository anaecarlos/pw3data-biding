import { Component } from '@angular/core';

@Component({
  selector: 'app-iterpolation',
  templateUrl: './iterpolation.component.html',
  styleUrls: ['./iterpolation.component.css']
})
export class IterpolationComponent {
  nome: string = "Ana e Tevez";
  imagem: string = "favicon.ico";
  numero: number = 2;
  calculo: number = this.numero + this.numero
}
