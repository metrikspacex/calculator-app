import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { CalculatorDisplayComponent } from "./calculator-display/calculator-display.component";
import { CalculatorHeaderComponent } from "./calculator-header/calculator-header.component";
import { CalculatorKeysComponent } from "./calculator-keys/calculator-keys.component";

@Component({
  imports: [
    CalculatorDisplayComponent,
    CalculatorHeaderComponent,
    CalculatorKeysComponent,
    CommonModule,
  ],
  selector: "app-calculator",
  standalone: true,
  styleUrls: ["./calculator.component.scss"],
  templateUrl: "./calculator.component.html",
})
export class CalculatorComponent {}
