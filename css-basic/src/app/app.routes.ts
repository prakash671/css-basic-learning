import { Routes } from '@angular/router';
import { SelectorComponent } from './selector/selector.component';
import { PesudosComponent } from './selector/pesudos/pesudos.component';
import { MidSelectorComponent } from './selector/mid-selector/mid-selector.component';

export const routes: Routes = [
    {
        path: 'selector',
        component: SelectorComponent
    },
    {
        path: 'pseudos',
        component: PesudosComponent
    },
    {
     path: 'mid-selector',
     component: MidSelectorComponent
    }
];
