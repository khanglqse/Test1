import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ModalModule } from 'ng2-bootstrap';

import { routing }       from './user.routing';
import { UserComponent } from './user.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    ModalModule.forRoot(),
    routing
  ],
  declarations: [
    UserComponent,    
  ]
})

export class UserModule { }
