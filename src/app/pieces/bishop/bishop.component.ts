import { Component, OnInit } from '@angular/core';
import { PIECE, TEAM } from '../../constants';
import { ChessPiece } from '../chess-piece';
import { Position } from '../../position';

@Component({
  selector: 'app-bishop',
  templateUrl: './bishop.component.html',
  styleUrls: ['./bishop.component.css']
})
export class BishopComponent extends ChessPiece implements OnInit {

  type = PIECE.BISHOP;

  ngOnInit() {
  }

  getPosition() : Position {
    return new Position(0,0);
  }

  move(): void {

  }

  isMoveAllowed(): boolean {
    return false;
  }

  getTeam(): TEAM.BLACK | TEAM.WHITE {
    return TEAM.BLACK
  }

}
