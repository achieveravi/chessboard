import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @Input() color: string;
  @Input() hCoordinate: number;
  @Input() vCoordinate: number;


  constructor() { }

  ngOnInit() {
  }

  getCoordinates(): any {
    return {x: this.hCoordinate, y: this.vCoordinate};
  }

  getColor(): string {
    console.log(this.color);
    return this.color;
  }


}
