import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CalculatorComponent } from "src/components/calculator/calculator.component";

@Component({
  imports: [CalculatorComponent, CommonModule],
  selector: "app-home",
  standalone: true,
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html",
})
export class HomeComponent {}
