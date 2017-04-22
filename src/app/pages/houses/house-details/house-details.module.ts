import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { ModalModule } from 'ng2-bootstrap';

import { routing } from './house-details.routing';

import { TabsModule } from 'ng2-bootstrap';

import {HouseDetailsComponent} from './house-details.component';


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
        HouseDetailsComponent
        ],
    providers: [],
})
export class HouseDetailsModule { }
