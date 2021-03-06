import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/list/board-list.module').then(m => m.BoardListModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./components/add/board-add.module').then(m => m.BoardAddModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./components/edit/board-edit.module').then(m => m.BoardEditModule)
  },
  {
    path: 'card/:id',
    loadChildren: () => import('./components/card/board-card.module').then(m => m.BoardCardModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BoardModule { }
