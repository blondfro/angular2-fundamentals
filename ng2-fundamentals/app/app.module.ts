///<reference path="events/events-list.component.ts"/>
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventService,
    EventRouteActivator,
    EventListResolver
} from './events/index'

import {EventsAppComponent} from './events-app.component';
import {NavbarComponent} from './nav/navbar.component';
import {Error404Component} from './errors/404.component';
import {ToastrService} from './common/toastr.service';

import {appRoutes} from './routes';
import {AuthService} from './user/auth.service';


@NgModule({

    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        EventListResolver,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState},
        AuthService
    ],
    bootstrap: [
        EventsAppComponent
    ]
})

export class AppModule {}

function checkDirtyState(component:CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not save this event, do you really wish to cancel');

    return true;
}

/**
 * Created by me on 3/16/2018.
 */
