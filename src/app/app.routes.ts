import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import Page404Component from './shared/pages/page-404/page-404.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./website/website.component'),
        children: [
            {
                path:'home',
                title: 'home',
                loadComponent: () => import('./website/pages/home/home.component')
            },
            {
                path:'about',
                title: 'about',
                loadComponent: () => import('./website/pages/about/about.component')
            },
            {
                path:'services',
                title: 'services',
                loadComponent: () => import('./website/pages/services/services.component')
            },
            {
                path:'contact',
                title: 'contact',
                loadComponent: () => import('./website/pages/contact/contact.component')
            },
            {
                path:':id',
                title: 'service',
                loadComponent: () => import('./website/pages/service-page/service-page.component')
            },
            { path:'', redirectTo:'home', pathMatch:'full'}
        ]
    },
    { path:'404', component:Page404Component },
    { path:'', redirectTo:'', pathMatch:'full'},
    { path:'**', redirectTo:'/404', pathMatch:'full'}
];

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
};
@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}