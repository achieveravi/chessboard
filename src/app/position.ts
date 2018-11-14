export class Position {
    x: number;
    y: number;

    constructor(hPos: number, vPos: number) {
        this.x = hPos;
        this.y = vPos;
    }

    getKey(): string {
        return 'h'+ this.x + 'v' + this.y;
    }
}