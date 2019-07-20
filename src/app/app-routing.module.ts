import {TasksComponent} from './containers/tasks/tasks.component';
import {ListsComponent} from './containers/lists/lists.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {SinglePageListComponent} from './containers/single-page-list/single-page-list.component';

const appRoutes: Routes = [
  {path: '', component: ListsComponent},
  {path: 'lists', component: ListsComponent},
  {path: 'lists/:id', component: SinglePageListComponent},
  {
    path: 'tasks',
    component: TasksComponent,
  },
  {path: 'tasks/:id', component: TasksComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
