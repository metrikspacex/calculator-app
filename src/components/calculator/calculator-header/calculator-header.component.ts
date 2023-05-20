import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { ThemeSwitcherService } from "../theme-switcher.service";

@Component({
  animations: [
    trigger("theme", [
      state(
        "theme-1",
        style({
          transform: "translateX(0px)",
        })
      ),
      state(
        "theme-2",
        style({
          transform: "translateX(22px)",
        })
      ),
      state(
        "theme-3",
        style({
          transform: "translateX(44px)",
        })
      ),
      state(
        "theme-1-2",
        style({
          transform: "translateX(22px)",
        })
      ),
      state(
        "theme-1-3",
        style({
          transform: "translateX(44px)",
        })
      ),
      state(
        "theme-2-1",
        style({
          transform: "translateX(0px)",
        })
      ),
      state(
        "theme-2-3",
        style({
          transform: "translateX(44px)",
        })
      ),
      state(
        "theme-3-1",
        style({
          transform: "translateX(0)",
        })
      ),
      state(
        "theme-3-2",
        style({
          transform: "translateX(22px)",
        })
      ),
      transition("* => theme-1", []),
      transition("* => theme-2", []),
      transition("* => theme-3", []),
      transition("* => theme-1-2", [animate("0.5s")]),
      transition("* => theme-1-3", [animate("0.5s")]),
      transition("* => theme-2-1", [animate("0.5s")]),
      transition("* => theme-2-3", [animate("0.5s")]),
      transition("* => theme-3-1", [animate("0.5s")]),
      transition("* => theme-3-2", [animate("0.5s")]),
    ]),
  ],
  imports: [CommonModule],
  selector: "app-calculator-header",
  standalone: true,
  styleUrls: ["./calculator-header.component.scss"],
  templateUrl: "./calculator-header.component.html",
})
export class CalculatorHeaderComponent {
  private readonly themeSwitcher = inject(ThemeSwitcherService);

  public currentTheme(): string {
    return this.themeSwitcher.getTransitionTheme();
  }

  public switchTheme(theme: string): void {
    switch (this.themeSwitcher.getTheme()) {
      case "theme-1": {
        if (theme === "theme-2") {
          this.themeSwitcher.setTransitionTheme("theme-1-2");
        } else if (theme === "theme-3") {
          this.themeSwitcher.setTransitionTheme("theme-1-3");
        }
        break;
      }
      case "theme-2": {
        if (theme === "theme-1") {
          this.themeSwitcher.setTransitionTheme("theme-2-1");
        } else if (theme === "theme-3") {
          this.themeSwitcher.setTransitionTheme("theme-2-3");
        }
        break;
      }
      case "theme-3": {
        if (theme === "theme-1") {
          this.themeSwitcher.setTransitionTheme("theme-3-1");
        } else if (theme === "theme-2") {
          this.themeSwitcher.setTransitionTheme("theme-3-2");
        }
        break;
      }
      default: {
        break;
      }
    }
    this.themeSwitcher.setTheme(theme);
  }
}
