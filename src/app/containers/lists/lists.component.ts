import {Component, OnInit} from '@angular/core';
import {ListService} from '../../services/list.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html',
    styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
    singleList: any;
    lists: any;

    constructor(private listService: ListService,
                private ar: ActivatedRoute, private route: Router) {
    }

    ngOnInit() {
        this.listService.getLists().subscribe(lists => {
                this.lists = lists;
            }
        );
    }

    removeCurrentList(listId, index) {
        this.listService.removeList(listId).subscribe();
        this.lists.splice(index, 1);
    }

    createList(listName) {
        const list = {listName};
        this.listService.createList(list).subscribe(l => {
            this.lists.push(l);
        });
    }

    navigateToList(id) {
        this.route
            .navigate(['lists', id])
            .then(z => {
                this.listService.getListById(id).subscribe(list => {
                    this.singleList = list;
                });
            });
    }
}
