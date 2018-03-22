import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {userRoutes} from "./user.routes";

import {ProfileComponent} from './profile.component';


@NgModule ({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent
    ],
    providers: []
})


export class UserModule {}


/**
 * Created by me on 3/21/2018.
 */
