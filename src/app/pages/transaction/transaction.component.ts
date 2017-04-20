import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';

import { Router } from '@angular/router';

@Component({
    selector: 'transaction',
    templateUrl: 'transaction.component.html',
    providers: [TransactionService]
})

export class TransactionComponent {

    public data = [];

    constructor(protected service: TransactionService,
        protected router: Router) {

        this.service.getData().then((data) => {
            this.data = data;
        });
    }

    public viewTransDetails(id) {
        this.router.navigate(['pages/trans', id]);
    }


}