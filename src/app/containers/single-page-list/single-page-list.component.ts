import {Component, OnInit} from '@angular/core';
import {ListService} from '../../services/list.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-single-page-list',
    templateUrl: './single-page-list.component.html',
    styleUrls: ['./single-page-list.component.scss']
})
export class SinglePageListComponent implements OnInit {
    singleList: any;
    lists: any;

    constructor(private listService: ListService,
                private ar: ActivatedRoute, private route: Router) {
    }

    ngOnInit() {
        const listId = this.ar.snapshot.params.id;
        this.listService.getListById(listId).subscribe(list => {
                this.singleList = list;
            }
        );
        this.listService.getLists().subscribe(lists => {
                this.lists = lists;
            }
        );
    }


    navigateToNextList(prevListId) {
        for (const list of this.lists) {
            if (list.id > prevListId) {
                console.log(list.id);
                this.singleList = list;
                this.route.navigate(['lists', this.singleList.id]);
                break;
            }
        }
    }
}

