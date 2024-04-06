import { Component, NgZone } from '@angular/core';
import { DemoSharedChessEngine } from '@demo/shared';
import {} from '@nikitos/chess-engine';

@Component({
  selector: 'demo-chess-engine',
  templateUrl: 'chess-engine.component.html',
})
export class ChessEngineComponent {
  demoShared: DemoSharedChessEngine;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedChessEngine();
  }
}
