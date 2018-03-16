
import {Component} from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
        <title>{{pageTitle}}</title>
        <div>
            <h1>Upcoming Angular 2+ Events</h1>
            <hr>
        <event-thumbnail [event]="event1"></event-thumbnail>
        </div>
    `
})

export class EventsListComponent {
    pageTitle = 'Events List';
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: 'app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}

/**
 * Created by me on 3/16/2018.
 */
