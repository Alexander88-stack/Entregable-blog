import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { VerifyGuard } from './guards/verify.guard';

const routes: Routes = [
  {path:'login',component: LoginComponent , },
  {path:'blog',component: BlogComponent},
  {path:'new-post',component: NewPostComponent , canActivate: [VerifyGuard]},
  {path:'**',pathMatch:'full', redirectTo:'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
