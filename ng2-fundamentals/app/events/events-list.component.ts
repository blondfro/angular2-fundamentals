
import {Component, OnInit} from "@angular/core";

import {EventService} from "./shared/event.service";
import {ToastrService} from "../common/toastr.service";

@Component({
    template: `
        <title>{{pageTitle}}</title>
        <div>
            <h1>Upcoming Angular 2+ Events</h1>
            <hr>
            <div class="row">
                <div *ngFor="let event of events"
                      class="col-md-5">
                    <event-thumbnail 
                            (click)="handleThumbnailClicked(event.name)"
                            [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
    `
})

export class EventsListComponent implements OnInit{
    pageTitle = 'Events List';
    events: any[];

    constructor(private eventService: EventService, private toastr: ToastrService) {

    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClicked(eventName) {
        this.toastr.success(eventName);
    }


}

/**
 * Created by me on 3/16/2018.
 */
