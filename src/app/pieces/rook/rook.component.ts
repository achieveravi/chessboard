import { Component, OnInit } from '@angular/core';
import { ChessPiece } from '../chess-piece';
import { Position } from '../../position';
import { PIECE, TEAM } from '../../constants';

@Component({
  selector: 'app-rook',
  templateUrl: './rook.component.html',
  styleUrls: ['./rook.component.css']
})
export class RookComponent extends ChessPiece implements OnInit {

  type = PIECE.ROOK;

  ngOnInit() {
  }

  getPosition() : Position {
    return new Position(0,0);
  }

  isMoveAllowed(newPos: Position): boolean {
    if (newPos.y - this.piece.position.y) {
      return newPos.x === this.piece.position.x; 
    } else if (newPos.x - this.piece.position.x) {
      return newPos.y === this.piece.position.y;
    }
    return false;
  }

  getTeam(): TEAM.BLACK | TEAM.WHITE {
    return TEAM.BLACK
  }

}
