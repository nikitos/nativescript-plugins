import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ChessEngineComponent } from './chess-engine.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ChessEngineComponent }])],
  declarations: [ChessEngineComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ChessEngineModule {}
