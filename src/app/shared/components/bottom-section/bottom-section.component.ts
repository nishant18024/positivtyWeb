import { Component } from '@angular/core';
import { ConditionsSectionComponent } from "../conditions-section/conditions-section.component";
import { EnterpriseSectionComponent } from "../enterprise-section/enterprise-section.component";
import { StatsSectionComponent } from "../stats-section/stats-section.component";
import { UiButtonComponent } from "../../ui-button/ui-button.component";

@Component({
  selector: 'app-bottom-section',
  imports: [ConditionsSectionComponent, StatsSectionComponent, EnterpriseSectionComponent, UiButtonComponent],
  templateUrl: './bottom-section.component.html',
  styleUrl: './bottom-section.component.scss'
})
export class BottomSectionComponent {

}
