import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { BoardComponent } from './board/board.component';
import { PawnComponent } from './pieces/pawn/pawn.component';
import { RookComponent } from './pieces/rook/rook.component';
import { BishopComponent } from './pieces/bishop/bishop.component';
import { KnightComponent } from './pieces/knight/knight.component';
import { QueenComponent } from './pieces/queen/queen.component';
import { KingComponent } from './pieces/king/king.component';
import { PiecesFactoryComponent } from './pieces-factory/pieces-factory.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { BoardStateService } from './board/board-state.service';


@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    BoardComponent,
    PawnComponent,
    RookComponent,
    BishopComponent,
    KnightComponent,
    QueenComponent,
    KingComponent,
    PiecesFactoryComponent
  ],
  imports: [
    BrowserModule,
    NgDragDropModule.forRoot()
  ],
  entryComponents: [
    PiecesFactoryComponent
  ],
  providers: [
    BoardStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
