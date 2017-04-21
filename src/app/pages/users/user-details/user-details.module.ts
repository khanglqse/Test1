import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { ModalModule } from 'ng2-bootstrap';

import { routing } from './user-details.routing';
import { UserDetailComponent } from './user-details.component';

import { TabsModule } from 'ng2-bootstrap';

import { ChatHistoriesComponent } from './chat-histories/chat-histories.component';
import {TransComponent} from './trans/trans.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        routing
    ],
    declarations: [
        UserDetailComponent, 
        ChatHistoriesComponent,
        TransComponent
        ],
    providers: [],
})
export class UserDetailModule { }
