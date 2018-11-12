import { Position } from "../position";
import { TEAM } from "../constants";
import { Input } from "@angular/core";

export abstract class ChessPiece {
    
    type: string;
    abstract getPosition(): Position;
    abstract move(): void;
    abstract isMoveAllowed(): boolean;
    abstract getTeam(): TEAM.BLACK | TEAM.WHITE;
    
    @Input() team: TEAM.BLACK | TEAM.WHITE;
}
