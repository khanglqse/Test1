import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { Pages } from './pages.component';
import { ChatBoxComponent } from './chat-box';

@NgModule({
  imports: [CommonModule, NgaModule, routing],
  declarations: [
    ChatBoxComponent,
    Pages
  ]
})
export class PagesModule {
}
