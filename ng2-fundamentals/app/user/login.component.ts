import {Component} from "@angular/core";

@Component({
    templateUrl: 'app/user/login.component.html'
})

export class LoginComponent{

    login(formValues) {
        console.log(formValues)
    }
}


/**
 * Created by me on 3/24/2018.
 */
