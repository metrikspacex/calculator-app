import { DOCUMENT } from "@angular/common";
import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeSwitcherService {
  private readonly document: Document = inject(DOCUMENT);
  private currentTheme!: string;
  private readonly defaultTheme = "theme-1";
  private transitionTheme!: string;

  public constructor() {
    this.setTheme(this.defaultTheme);
    this.setTransitionTheme(this.defaultTheme);
  }

  public getTheme(): string {
    if (this.currentTheme) {
      return this.currentTheme;
    }
    this.currentTheme = "theme-1";
    return this.currentTheme;
  }

  public setTheme(theme: string): void {
    this.currentTheme = theme;
    this.document.documentElement.setAttribute("data-theme", theme);
  }

  public getTransitionTheme(): string {
    if (this.transitionTheme) {
      return this.transitionTheme;
    }
    this.transitionTheme = "theme-1";
    return this.transitionTheme;
  }

  public setTransitionTheme(transitionTheme: string): void {
    this.transitionTheme = transitionTheme;
  }
}
