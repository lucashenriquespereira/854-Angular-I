import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public btnDisabled = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.btnDisabled = false;
    }, 5000);
  }

  public submitForm(): void {
    console.log('Formulário enviado!')
  }

  public showInputData(event: any): void {
    console.log(event.target.value)
  }

}
