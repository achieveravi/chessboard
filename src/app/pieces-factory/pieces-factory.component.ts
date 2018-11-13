import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TEAM } from '../constants';
import { PieceModel } from './pieces.model';

@Component({
  selector: 'app-pieces-factory',
  templateUrl: './pieces-factory.component.html',
  styleUrls: ['./pieces-factory.component.css']
})
export class PiecesFactoryComponent {

  piece: PieceModel;
  @Output() moveSuccess: EventEmitter<PieceModel> = new EventEmitter<PieceModel>();;

  dragEndHandler(event: any) {
    this.moveSuccess.emit(this.piece);
  }

}
