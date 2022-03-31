import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styles: []
})
export class ModelsComponent {

  email: string;
  password: string;
  nombre: string;

  constructor() { }

  ngOnInit() {
  }

}
