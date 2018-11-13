import { Component, OnInit } from '@angular/core';
import { ChessPiece } from '../chess-piece';
import { PIECE, TEAM } from '../../constants';
import { Position } from '../../position';

@Component({
  selector: 'app-pawn',
  templateUrl: './pawn.component.html',
  styleUrls: ['./pawn.component.css']
})
export class PawnComponent extends ChessPiece implements OnInit {

  type = PIECE.PAWN;

  ngOnInit() {
  }

  getPosition() : Position {
    return new Position(0,0);
  }

  isMoveAllowed(newPos: Position): boolean {
    return newPos.y - this.piece.position.y === 1 && newPos.x === this.piece.position.x;
  }

  getTeam(): TEAM.BLACK | TEAM.WHITE {
    return TEAM.BLACK
  }



}
