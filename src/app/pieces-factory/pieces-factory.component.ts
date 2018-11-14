import { Component, Input, Output } from '@angular/core';
import { TEAM } from '../constants';
import { PieceModel } from './pieces.model';

@Component({
  selector: 'app-pieces-factory',
  templateUrl: './pieces-factory.component.html',
  styleUrls: ['./pieces-factory.component.css']
})
export class PiecesFactoryComponent {

  piece: PieceModel;

}
