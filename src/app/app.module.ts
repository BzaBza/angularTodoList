import {SimpleFormComponent} from './commonsModule/simple-form/simple-form.component';
import {TasksComponent} from './containers/tasks/tasks.component';
import {ListsComponent} from './containers/lists/lists.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {TaskComponent} from './components/task/task.component';
import {ListComponent} from './components/list/list.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {FullPageListComponent} from './components/full-page-list/full-page-list.component';
import {SinglePageListComponent} from './containers/single-page-list/single-page-list.component';

@NgModule({
    declarations: [
        AppComponent,
        SimpleFormComponent,
        NotFoundComponent,
        HomeComponent,
        TaskComponent,
        ListComponent,
        ListsComponent,
        TasksComponent,
        FullPageListComponent,
        SinglePageListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    exports: [RouterModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
