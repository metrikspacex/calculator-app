import type { OnInit } from "@angular/core";
import { Component, inject } from "@angular/core";
import { bootstrapApplication, Title } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter, RouterOutlet } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";

@Component({
  imports: [RouterOutlet],
  selector: "app-root",
  standalone: true,
  template: `<router-outlet />`,
})
export class RootComponent implements OnInit {
  private readonly title: Title = inject(Title);

  public ngOnInit(): void {
    this.title.setTitle("Frontend Mentor | Calculator app");
  }
}

bootstrapApplication(RootComponent, {
  providers: [
    provideAnimations(),
    provideRouter([
      {
        component: HomeComponent,
        path: "",
      },
    ]),
  ],
}).catch((error) => {
  console.error(error);
});
