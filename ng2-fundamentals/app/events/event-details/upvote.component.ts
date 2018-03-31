import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'upvote',
    styleUrls: ['/app/events/event-details//upvote.component.css'],
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
                <div>
                    <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
                    <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
                </div>
            <div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div>
            </div>
            </div>
        </div>
    `,
})

export class UpvoteComponennt {
    @Input() count: number;
    @Input() voted: boolean;
    @Output() vote = new EventEmitter();

    onClick() {
        this.vote.emit({});
    }
}



/**
 * Created by me on 3/30/2018.
 */
