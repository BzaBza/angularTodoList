import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListService} from '../../services/list.service';

@Component({
    selector: 'app-full-page-list',
    templateUrl: './full-page-list.component.html',
    styleUrls: ['./full-page-list.component.scss']
})
export class FullPageListComponent implements OnInit {
    @Input() list: any;
    @Output() nextList = new EventEmitter();

    constructor(private ar: ActivatedRoute, private route: Router, private listService: ListService) {
    }

    ngOnInit() {
    }

    navigate() {
        this.route.navigate(['lists']);
    }

    nextNavigate() {
        this.nextList.emit(this.list.id);
    }
}
