import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumbersPageComponent } from './products/pages/numbers-page/numbers-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
