import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { ModalModule } from 'ng2-bootstrap';

import { routing }       from './transaction.routing';
import { TransactionDetailsComponent } from './transaction-details.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    TransactionDetailsComponent,    
  ]
})

export class TransactionDetailsModule { }
