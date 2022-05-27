import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `<button>{{ value }}</button>
  `,
  styles:['button { width: 100%; height: 100%; color: white; font-size: 7em !important; background-color: #78D19E;border:none;}']
})
//   templateUrl: './square.component.html',
//   styleUrls: ['./square.component.scss']
// })
export class SquareComponent  {

  @Input()
  value: 'X' | 'O' = "X";

}
