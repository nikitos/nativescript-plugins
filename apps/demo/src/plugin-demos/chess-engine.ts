import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedChessEngine } from '@demo/shared';
import {} from '@nikitos/chess-engine';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedChessEngine {}
