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

  move(newPos: Position): void {
    if (this.isMoveAllowed(newPos)) {
      this.piece.position = newPos;
    }
  }

  isMoveAllowed(newPos: Position): boolean {
    return Math.abs(newPos.y - this.piece.position.y) === Math.abs(newPos.x - this.piece.position.x)
  }

  getTeam(): TEAM.BLACK | TEAM.WHITE {
    return TEAM.BLACK
  }

}
