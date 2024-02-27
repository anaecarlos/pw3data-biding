import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component {
  ocultar: boolean = true;
  ocult() : void{
    if (this.ocultar == false){
      this.ocultar = true;
    }
    else{
      this.ocultar = false;
    }
  }

}

/*this.ocultar = !this.ocultar*/
