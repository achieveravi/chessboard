import { Component, OnInit } from '@angular/core';
import { TEAM } from '../constants';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  hCoordinates = [1, 2, 3, 4, 5, 6, 7, 8];
  vCoordinates = [1, 2, 3, 4, 5, 6, 7, 8];

  public rowColor = this.rowColor ? (TEAM.BLACK ? TEAM.WHITE : TEAM.BLACK) : TEAM.WHITE;

  constructor() { }

  ngOnInit() {
  }
  

}
