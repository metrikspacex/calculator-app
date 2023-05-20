import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { ComputeService } from "../compute.service";

@Component({
  imports: [CommonModule],
  selector: "app-calculator-keys",
  standalone: true,
  styleUrls: ["./calculator-keys.component.scss"],
  templateUrl: "./calculator-keys.component.html",
})
export class CalculatorKeysComponent {
  public readonly computeService = inject(ComputeService);
}
