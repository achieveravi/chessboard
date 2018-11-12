import { Component, OnInit } from '@angular/core';
import { ChessPiece } from '../chess-piece';
import { Position } from '../../position';
import { TEAM, PIECE } from '../../constants';

@Component({
  selector: 'app-queen',
  templateUrl: './queen.component.html',
  styleUrls: ['./queen.component.css']
})
export class QueenComponent extends ChessPiece implements OnInit {

  type = PIECE.QUEEN;

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
