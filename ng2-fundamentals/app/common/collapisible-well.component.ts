import {Component} from "@angular/core";

@Component({
    selector: 'collapsible-well',
    template: `
        <div (click)="toggleContent()" class="well pointable">
            <h4>
                <ng-content select="[well-title]" ></ng-content>    
            </h4>
            <ng-content *ngIf="visible" select="[well-body]" ></ng-content>
        </div>
    `
})

export class CollapsibleWellComponent {
    visible: boolean = true;

    toggleContent() {
        if (this.visible) {
            this.visible = false;
        }
        else {this.visible = true;}
    }
}


/**
 * Created by me on 3/27/2018.
 */
