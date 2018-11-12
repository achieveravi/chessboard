import { Component, OnInit } from '@angular/core';
import { PIECE, TEAM } from '../../constants';
import { ChessPiece } from '../chess-piece';
import { Position } from '../../position';

@Component({
  selector: 'app-king',
  templateUrl: './king.component.html',
  styleUrls: ['./king.component.css']
})
export class KingComponent extends ChessPiece implements OnInit {

  type = PIECE.KING;

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
