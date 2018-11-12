import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Position } from '../position';


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

  getCoordinates(): Position {
    return new Position(this.hCoordinate, this.vCoordinate);
  }

  getColor(): string {
    console.log(this.color);
    return this.color;
  }


}
