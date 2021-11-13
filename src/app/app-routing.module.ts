import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'personal-details',
    loadChildren: () => import('./personal-details/personal-details.module').then( m => m.PersonalDetailsPageModule)
  },
  {
    path: 'smart-contract',
    loadChildren: () => import('./smart-contract/smart-contract.module').then( m => m.SmartContractPageModule)
  },
  {
    path: 'sections',
    loadChildren: () => import('./sections/sections.module').then( m => m.SectionsPageModule)
  },
  {
    path: 'mathematics',
    loadChildren: () => import('./mathematics/mathematics.module').then( m => m.MathematicsPageModule)
  },
  {
    path: 'natural-science',
    loadChildren: () => import('./natural-science/natural-science.module').then( m => m.NaturalSciencePageModule)
  },
  {
    path: 'test-page',
    loadChildren: () => import('./test-page/test-page.module').then( m => m.TestPagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
