import { TEAM } from "../constants";
import { Position } from "../position";

export class PieceModel {
    team: TEAM.BLACK | TEAM.WHITE;
    type: string;
    position: Position;

    constructor(team: TEAM.BLACK | TEAM.WHITE, type: string, position: Position) {
        this.team = team;
        this.type = type;
        this.position = position;
    }
}