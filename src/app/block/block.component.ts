import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Input } from '@angular/core';
import { Position } from '../position';
import { TEAM } from '../constants';
import { PieceModel } from '../pieces-factory/pieces.model';
import { PiecesFactoryComponent } from '../pieces-factory/pieces-factory.component';


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @ViewChild('container', {read: ViewContainerRef}) containerRef: ViewContainerRef;

  @Input() hCoordinate: number;
  @Input() vCoordinate: number;

  childrenReferences = [];
  
  piece: PieceModel;

  color: string;


  constructor(private compFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.fillColor();
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

  addPiece(piece: PieceModel) {
    let componentFactory = this.compFactoryResolver.resolveComponentFactory(PiecesFactoryComponent);
    const piecesFactoryComponent: PiecesFactoryComponent = this.containerRef.createComponent(componentFactory).instance;
    piecesFactoryComponent.piece = piece;

    this.childrenReferences.push(piecesFactoryComponent);

  }

  removePiece() {
    if (this.childrenReferences.length > 0) {
      this.containerRef.remove(0);
    }
  }


}
