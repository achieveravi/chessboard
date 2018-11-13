import { Position } from "../position";
import { TEAM } from "../constants";
import { Input } from "@angular/core";
import { PieceModel } from "../pieces-factory/pieces.model";

export abstract class ChessPiece {
    
    type: string;
    abstract getPosition(): Position;
    abstract isMoveAllowed(newPos?: Position): boolean;
    abstract getTeam(): TEAM.BLACK | TEAM.WHITE;
    
    @Input() piece: PieceModel;
    
    move(newPos: Position): void {
        if (this.isMoveAllowed(newPos)) {
            this.piece.position = newPos
        } else {
            throw new Error('Move not allowed!');
        }
    }
}
