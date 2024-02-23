import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {
  @Input() public test1 = 'test1';
  public test2 = "test2";

  public valueChanged(evt: Event) {
    console.log(evt);
    console.log((evt.target as HTMLInputElement).value);
    
  }
}
