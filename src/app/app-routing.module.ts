import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "levels",
    loadChildren: () =>
      import("./levels/levels.module").then((m) => m.LevelsPageModule),
  },
  
  {
    path: "quiz/:id",
    loadChildren: () =>
      import("./quiz/quiz.module").then((m) => m.QuizPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
