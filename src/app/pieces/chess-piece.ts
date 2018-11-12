import { Position } from "../position";
import { TEAM } from "../constants";
import { Input } from "@angular/core";
import { PieceModel } from "../pieces-factory/pieces.model";

export abstract class ChessPiece {
    
    type: string;
    abstract getPosition(): Position;
    abstract move(): void;
    abstract isMoveAllowed(): boolean;
    abstract getTeam(): TEAM.BLACK | TEAM.WHITE;
    
    @Input() piece: PieceModel;
}
