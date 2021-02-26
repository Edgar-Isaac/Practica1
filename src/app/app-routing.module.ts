import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { productoComponent} from "./producto/producto.Component";
import { index2Component } from './index/index2.component';

const routes: Routes = [
  
    { path: "index", component: index2Component, pathMatch: "full" },
    { path: "login", component: LoginComponent, pathMatch: "full" },
    { path: "register", component: RegisterComponent, pathMatch: "full" },
    { path: "producto", component: productoComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


