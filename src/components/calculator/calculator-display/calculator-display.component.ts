import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { ComputeService } from "../compute.service";

@Component({
  imports: [CommonModule],
  selector: "app-calculator-display",
  standalone: true,
  styleUrls: ["./calculator-display.component.scss"],
  templateUrl: "./calculator-display.component.html",
})
export class CalculatorDisplayComponent {
  public readonly computeService = inject(ComputeService);
}
