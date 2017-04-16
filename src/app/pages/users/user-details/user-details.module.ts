import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { ModalModule } from 'ng2-bootstrap';

import { routing } from './user-details.routing';
import { UserDetailComponent } from './user-details.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        ModalModule.forRoot(),
        routing
    ],
    declarations: [UserDetailComponent],
    providers: [],
})
export class UserDetailModule { }
