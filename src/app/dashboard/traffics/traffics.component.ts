import { Component } from '@angular/core';

@Component({
  selector: 'app-traffics',
  standalone: true,
  imports: [],
  templateUrl: './traffics.component.html',
  styleUrl: './traffics.component.css'
})
export class TrafficsComponent {
  dummyTrafficData = [
     {
      id: 'd1',
      value: 433
     },
     {
      id: 'd2',
      value: 434
     },
     {
      id: 'd3',
      value: 435
     },
     {
      id: 'd4',
      value: 436
     },
     {
      id: 'd5',
      value: 437
     },
     {
      id: 'd6',
      value: 438
     }
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data)=> data.value))
}
