import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exerice1',
  templateUrl: './exerice1.component.html',
  styleUrls: ['./exerice1.component.css']
})
export class Exerice1Component {
  @Input() public test1 = 'test1';
  public test2 = "test2";

  public valueChanged(evt: Event) {
    console.log(evt);
    console.log((evt.target as HTMLInputElement).value);
    
  }
}
