import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name = "Robson";

  idButton= "1234idButton";

  meuBooleano = false;

  atualizaBooleano(valor: boolean){
    this.meuBooleano = valor;
  }


  submit(event: any){
    console.log(event);
  }

}
