import { Component, OnInit, AfterContentChecked, ViewChildren, QueryList } from '@angular/core';
import { TEAM, PIECE } from '../constants';
import { BlockComponent } from '../block/block.component';
import { PieceModel } from '../pieces-factory/pieces.model';
import { Position } from '../position';
import { BoardStateService } from './board-state.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, AfterContentChecked {

  @ViewChildren(BlockComponent) blockComponents: QueryList<BlockComponent>;

  hCoordinates = [1, 2, 3, 4, 5, 6, 7, 8];
  vCoordinates = [1, 2, 3, 4, 5, 6, 7, 8];

  gameStarted: boolean = false;

  public rowColor = this.rowColor ? (TEAM.BLACK ? TEAM.WHITE : TEAM.BLACK) : TEAM.WHITE;

  constructor(private boardStateService: BoardStateService) { }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    this.startGame();
  }

  startGame() {
    this.boardStateService.createInitialState();
    if (!this.gameStarted && this.blockComponents) {
      this.blockComponents.forEach((block: BlockComponent) => {
        if (this.boardStateService.boardState.get(block.getCoordinates().getKey())) {
          block.addPiece(this.boardStateService.boardState.get(block.getCoordinates().getKey()))
        }
        // this.initializeBlockWithPieces(block);
      });
      this.gameStarted = true;
    }
  }

  initializeBlockWithPieces(block: BlockComponent): void {
    if (block.vCoordinate == 2) {
      block.addPiece(new PieceModel(TEAM.WHITE, PIECE.PAWN, new Position(block.hCoordinate, block.vCoordinate)));
    }

    if (block.vCoordinate == 7) {
      block.addPiece(new PieceModel(TEAM.BLACK, PIECE.PAWN, new Position(block.hCoordinate, block.vCoordinate)));
    }

    if (block.vCoordinate === 1 && (block.hCoordinate === 1 || block.hCoordinate === 8)) {
      block.addPiece(new PieceModel(TEAM.WHITE, PIECE.ROOK, new Position(block.hCoordinate, block.vCoordinate)));
    }

    if (block.vCoordinate === 8 && (block.hCoordinate === 1 || block.hCoordinate === 8)) {
      block.addPiece(new PieceModel(TEAM.BLACK, PIECE.ROOK, new Position(block.hCoordinate, block.vCoordinate)));
    }

    if (block.vCoordinate === 1 && (block.hCoordinate === 2 || block.hCoordinate === 7)) {
      block.addPiece(new PieceModel(TEAM.WHITE, PIECE.KNIGHT, new Position(block.hCoordinate, block.vCoordinate)));
    }

    if (block.vCoordinate === 8 && (block.hCoordinate === 2 || block.hCoordinate === 7)) {
      block.addPiece(new PieceModel(TEAM.BLACK, PIECE.KNIGHT, new Position(block.hCoordinate, block.vCoordinate)));
    }

    if (block.vCoordinate === 1 && (block.hCoordinate === 3 || block.hCoordinate === 6)) {
      block.addPiece(new PieceModel(TEAM.WHITE, PIECE.BISHOP, new Position(block.hCoordinate, block.vCoordinate)));
    }

    if (block.vCoordinate === 8 && (block.hCoordinate === 3 || block.hCoordinate === 6)) {
      block.addPiece(new PieceModel(TEAM.BLACK, PIECE.BISHOP, new Position(block.hCoordinate, block.vCoordinate)));
    }

    if (block.vCoordinate === 1 && block.hCoordinate === 5) {
      block.addPiece(new PieceModel(TEAM.WHITE, PIECE.QUEEN, new Position(block.hCoordinate, block.vCoordinate)));
    }

    if (block.vCoordinate === 8 && block.hCoordinate === 4) {
      block.addPiece(new PieceModel(TEAM.BLACK, PIECE.QUEEN, new Position(block.hCoordinate, block.vCoordinate)));
    }

    if (block.vCoordinate === 1 && block.hCoordinate === 4) {
      block.addPiece(new PieceModel(TEAM.WHITE, PIECE.KING, new Position(block.hCoordinate, block.vCoordinate)));
    }

    if (block.vCoordinate === 8 && block.hCoordinate === 5) {
      block.addPiece(new PieceModel(TEAM.BLACK, PIECE.KING, new Position(block.hCoordinate, block.vCoordinate)));
    }
  }
  
  resetGame() {
    this.gameStarted = false;
    this.blockComponents.forEach((block: BlockComponent) => {
      block.removePiece();
    });
    this.startGame();
  }

  onDropSuccess(piece: PieceModel) {
    this.blockComponents.forEach((block: BlockComponent) => {
      if (block.getCoordinates().getKey() === piece.position.getKey()) {
        block.removePiece();
      }
    });
  }

}
