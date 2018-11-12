import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Position } from '../position';
import { TEAM, PIECE } from '../constants';
import { PieceModel } from '../pieces-factory/pieces.model';


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @Input() hCoordinate: number;
  @Input() vCoordinate: number;
  
  piece: PieceModel;

  color: string;


  constructor() { }

  ngOnInit() {
    this.fillColor();
    this.initializeBlockWithPieces();
  }

  getCoordinates(): Position {
    return new Position(this.hCoordinate, this.vCoordinate);
  }

  getColor(): string {
    return this.color;
  }

  fillColor(): void {
    this.color = ((this.vCoordinate % 2 === 0 && this.hCoordinate % 2 === 0) || 
        (this.vCoordinate % 2 !== 0 && this.hCoordinate % 2 !== 0)) ? this.color = TEAM.WHITE : TEAM.BLACK;
  }

  initializeBlockWithPieces(): void {
    if (this.vCoordinate == 2) {
      this.piece = new PieceModel(TEAM.WHITE, PIECE.PAWN, new Position(this.hCoordinate, this.vCoordinate));
    }

    if (this.vCoordinate == 7) {
      this.piece = new PieceModel(TEAM.BLACK, PIECE.PAWN, new Position(this.hCoordinate, this.vCoordinate));
    }

    if (this.vCoordinate === 1 && (this.hCoordinate === 1 || this.hCoordinate === 8)) {
      this.piece = new PieceModel(TEAM.WHITE, PIECE.ROOK, new Position(this.hCoordinate, this.vCoordinate));
    }

    if (this.vCoordinate === 8 && (this.hCoordinate === 1 || this.hCoordinate === 8)) {
      this.piece = new PieceModel(TEAM.BLACK, PIECE.ROOK, new Position(this.hCoordinate, this.vCoordinate));
    }

    if (this.vCoordinate === 1 && (this.hCoordinate === 2 || this.hCoordinate === 7)) {
      this.piece = new PieceModel(TEAM.WHITE, PIECE.KNIGHT, new Position(this.hCoordinate, this.vCoordinate));
    }

    if (this.vCoordinate === 8 && (this.hCoordinate === 2 || this.hCoordinate === 7)) {
      this.piece = new PieceModel(TEAM.BLACK, PIECE.KNIGHT, new Position(this.hCoordinate, this.vCoordinate));
    }

    if (this.vCoordinate === 1 && (this.hCoordinate === 3 || this.hCoordinate === 6)) {
      this.piece = new PieceModel(TEAM.WHITE, PIECE.BISHOP, new Position(this.hCoordinate, this.vCoordinate));
    }

    if (this.vCoordinate === 8 && (this.hCoordinate === 3 || this.hCoordinate === 6)) {
      this.piece = new PieceModel(TEAM.BLACK, PIECE.BISHOP, new Position(this.hCoordinate, this.vCoordinate));
    }

    if (this.vCoordinate === 1 && this.hCoordinate === 5) {
      this.piece = new PieceModel(TEAM.WHITE, PIECE.QUEEN, new Position(this.hCoordinate, this.vCoordinate));
    }

    if (this.vCoordinate === 8 && this.hCoordinate === 4) {
      this.piece = new PieceModel(TEAM.BLACK, PIECE.QUEEN, new Position(this.hCoordinate, this.vCoordinate));
    }

    if (this.vCoordinate === 1 && this.hCoordinate === 4) {
      this.piece = new PieceModel(TEAM.WHITE, PIECE.KING, new Position(this.hCoordinate, this.vCoordinate));
    }

    if (this.vCoordinate === 8 && this.hCoordinate === 5) {
      this.piece = new PieceModel(TEAM.BLACK, PIECE.KING, new Position(this.hCoordinate, this.vCoordinate));
    }
  }


}
