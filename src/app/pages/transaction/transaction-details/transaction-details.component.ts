import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response } from '@angular/http';

import { TransactionDetailsService } from './transaction-details.service';

@Component({
    selector: 'transaction-details',
    templateUrl: 'transaction-details.component.html',
    providers: [TransactionDetailsService]
})

export class TransactionDetailsComponent implements OnInit {
    public transInfo = {};

    constructor(private service: TransactionDetailsService,
        protected activeRoute: ActivatedRoute) {
        //alert(this.activeRoute.snapshot.params['id']);

        let id = this.activeRoute.snapshot.params['id'];
        this.service.getDetails(id)
            .then((ret: Response) => {
                this.transInfo = ret.json();
            });

    }



    ngOnInit() { }


}