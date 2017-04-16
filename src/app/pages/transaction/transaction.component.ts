import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';

@Component({
    selector: 'transaction',
    templateUrl: 'transaction.component.html',
    providers: [TransactionService]
})

export class TransactionComponent {

    public data = [];

    constructor(protected service: TransactionService) {

        this.service.getData().then((data) => {
            this.data = data;
        });
    }


}