import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [RouterModule],
    standalone: true
})
export class NavbarComponent {

}
