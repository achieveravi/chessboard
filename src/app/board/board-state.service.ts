import { Injectable } from '@angular/core';
import { Position } from '../position';
import { PieceModel } from '../pieces-factory/pieces.model';
import { TEAM, PIECE } from '../constants';

@Injectable()
export class BoardStateService {

  boardState: Map<string, PieceModel>;

  constructor() { }

  createInitialState(): void {
    this.boardState = new Map<string, PieceModel>();

    for(let i = 1; i < 9; i++ ) {
      let whitePawnPos: Position = new Position(i, 2);
      let blackPawnPos: Position = new Position(i, 7);
      
      // create white & black pawns
      this.boardState.set(whitePawnPos.getKey(), new PieceModel(TEAM.WHITE, PIECE.PAWN, whitePawnPos));
      this.boardState.set(blackPawnPos.getKey(), new PieceModel(TEAM.BLACK, PIECE.PAWN, blackPawnPos));

      // create white and black rooks
      if (i === 1 || i === 8) {
        let whiteRookPos: Position = new Position(i, 1);
        let blackRookPos: Position = new Position(i, 8);
        this.boardState.set(whiteRookPos.getKey(), new PieceModel(TEAM.WHITE, PIECE.ROOK, whiteRookPos));
        this.boardState.set(blackRookPos.getKey(), new PieceModel(TEAM.BLACK, PIECE.ROOK, blackRookPos));
      }

      // create white and black knights
      if (i === 2 || i === 7) {
        let whiteKnightPos: Position = new Position(i, 1);
        let blackKnightPos: Position = new Position(i, 8);
        this.boardState.set(whiteKnightPos.getKey(), new PieceModel(TEAM.WHITE, PIECE.KNIGHT, whiteKnightPos));
        this.boardState.set(blackKnightPos.getKey(), new PieceModel(TEAM.BLACK, PIECE.KNIGHT, blackKnightPos));
      }

      // create white and black bishops
      if (i === 3 || i === 6) {
        let whiteBishopPos: Position = new Position(i, 1);
        let blackBishopPos: Position = new Position(i, 8);
        this.boardState.set(whiteBishopPos.getKey(), new PieceModel(TEAM.WHITE, PIECE.BISHOP, whiteBishopPos));
        this.boardState.set(blackBishopPos.getKey(), new PieceModel(TEAM.BLACK, PIECE.BISHOP, blackBishopPos));
      }

    }

    //create white queen
    let whiteQueenPos: Position = new Position(5, 1);
    this.boardState.set(whiteQueenPos.getKey(), new PieceModel(TEAM.WHITE, PIECE.QUEEN, whiteQueenPos));

    //create black queen
    let blackQueenPos: Position = new Position(4, 8);
    this.boardState.set(blackQueenPos.getKey(), new PieceModel(TEAM.BLACK, PIECE.QUEEN, blackQueenPos));

    //create white king
    let whiteKingPos: Position = new Position(4, 1);
    this.boardState.set(whiteKingPos.getKey(), new PieceModel(TEAM.WHITE, PIECE.KING, whiteKingPos));

    //create black queen
    let blackKingPos: Position = new Position(5, 8);
    this.boardState.set(blackKingPos.getKey(), new PieceModel(TEAM.BLACK, PIECE.KING, blackKingPos));

  }

  isMoveAllowed(piece: PieceModel, blockPos: Position): boolean {
    switch (piece.type) {
      case PIECE.PAWN:
        return this.pawnValidMove(piece, blockPos);
      
      case PIECE.ROOK:
        return this.rookValidMove(piece, blockPos);
      
      case PIECE.BISHOP:
        return this.bishopValidMove(piece, blockPos);

      case PIECE.KNIGHT:
        return this.knightValidMove(piece, blockPos);

      case PIECE.QUEEN:
        return this.rookValidMove(piece, blockPos) || this.bishopValidMove(piece, blockPos);
      
      case PIECE.KING:
        return this.kingValidMove(piece, blockPos);
    
      default:
        return false;
    }
  }

  private pawnValidMove(piece: PieceModel, blockPos: Position): boolean {
    return piece.team === TEAM.WHITE ? blockPos.y - piece.position.y === 1 && blockPos.x === piece.position.x :
      blockPos.y - piece.position.y === -1 && blockPos.x === piece.position.x;
  }

  private rookValidMove(piece: PieceModel, blockPos: Position): boolean {
    if (blockPos.y - piece.position.y) {
      return blockPos.x === piece.position.x; 
    } else if (blockPos.x - piece.position.x) {
      return blockPos.y === piece.position.y;
    }
    return false;
  }

  private knightValidMove(piece: PieceModel, blockPos: Position): boolean {
    if (Math.abs(blockPos.y - piece.position.y) === 2) {
      return Math.abs(blockPos.x - piece.position.x) === 1;
    } else if (Math.abs(blockPos.x - piece.position.x) === 2) {
      return Math.abs(blockPos.y - piece.position.y) === 1;
    }
    return false;
  }

  private bishopValidMove(piece: PieceModel, blockPos: Position): boolean {
    return Math.abs(blockPos.y - piece.position.y) === Math.abs(blockPos.x - piece.position.x)
  }

  private kingValidMove(piece: PieceModel, blockPos: Position): boolean {
    return Math.abs(blockPos.y - piece.position.y) < 2 && Math.abs(blockPos.x - piece.position.x) < 2;
  }

}
