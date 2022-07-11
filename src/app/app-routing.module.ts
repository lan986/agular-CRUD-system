import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChildAComponent } from './child-a/child-a.component';
import { DetailsComponent } from './details/details.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { SecondComponent } from './second/second.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [{path :"home",component:HomeComponent},
 //children:[{path:"childA",component:ChildAComponent}]},
           // {path :"second",component:SecondComponent},
           // {path :"second/:id",component:SecondComponent},
            //{path :"",component:HomeComponent },
            {path :"about",component:AboutComponent},
            {path :"user",component:UserListComponent},
             {path:"details/:id",component:DetailsComponent},
             {path:"posts",component:PostComponent},
             {path:"user/edit/:id",component:UserFormComponent},
             {path:"userForm",component:UserFormComponent},
        
            {path:"",redirectTo:"/user",pathMatch:"full"},
            {path :"**",component:PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
