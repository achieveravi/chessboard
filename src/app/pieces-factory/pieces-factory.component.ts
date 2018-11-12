import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { TEAM } from '../constants';
import { PieceModel } from './pieces.model';

@Component({
  selector: 'app-pieces-factory',
  templateUrl: './pieces-factory.component.html',
  styleUrls: ['./pieces-factory.component.css']
})
export class PiecesFactoryComponent {

  @Input() piece: PieceModel;

}
