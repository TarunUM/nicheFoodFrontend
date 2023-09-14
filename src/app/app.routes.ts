import { Route } from '@angular/router';
import {NotFoundComponent} from "./components/Not-Found/not-found.component";
import {HomeComponent} from "./components/home/home.component";

export const appRoutes: Route[] = [
    {
      path: '',
      component: HomeComponent,
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
