import { Component, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Input } from '@angular/core';
import { Position } from '../position';
import { TEAM } from '../constants';
import { PieceModel } from '../pieces-factory/pieces.model';
import { PiecesFactoryComponent } from '../pieces-factory/pieces-factory.component';
import { DropEvent } from 'ng-drag-drop';
import { BoardStateService } from '../board/board-state.service';


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @ViewChild('container', {read: ViewContainerRef}) containerRef: ViewContainerRef;

  @Input() hCoordinate: number;
  @Input() vCoordinate: number;

  @Output() dropSuccess: EventEmitter<PieceModel> = new EventEmitter<PieceModel>();

  childrenReferences = [];
  
  piece: PieceModel;

  color: string;


  constructor(private compFactoryResolver: ComponentFactoryResolver,
              private boardStateService: BoardStateService) { }

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
    piece.position = this.getCoordinates();
    piecesFactoryComponent.piece = piece;
    this.piece = piece;
    this.boardStateService.boardState.set(this.getCoordinates().getKey(), piece);
    this.childrenReferences.push(piecesFactoryComponent);

  }

  removePiece() {
    if (this.childrenReferences.length > 0) {
      this.containerRef.remove(0);
      this.piece = null;
    }
  }

  onPieceDrop(event: DropEvent) {
    this.dropSuccess.emit(<PieceModel>event.dragData);
    this.removePiece();
    this.addPiece(<PieceModel>event.dragData);
    this.boardStateService.boardState.delete((<PieceModel>event.dragData).position.getKey())
  }

  isDropAllowed = (dragData: PieceModel): boolean => {
    if (this.childrenReferences.length > 0 && this.piece) {
      return (<PiecesFactoryComponent>this.childrenReferences[0]).piece.team !== dragData.team && 
      this.boardStateService.isMoveAllowed(dragData, this.getCoordinates());
    }
    return this.boardStateService.isMoveAllowed(dragData, this.getCoordinates());
  }


}
