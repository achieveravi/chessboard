import { Component, OnInit } from '@angular/core';
import { PIECE, TEAM } from '../../constants';
import { ChessPiece } from '../chess-piece';
import { Position } from '../../position';

@Component({
  selector: 'app-knight',
  templateUrl: './knight.component.html',
  styleUrls: ['./knight.component.css']
})
export class KnightComponent extends ChessPiece implements OnInit {

  type = PIECE.KNIGHT;

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
