import { Component } from '@angular/core';
import { ConditionsSectionComponent } from "../../shared/components/conditions-section/conditions-section.component";
import { EnterpriseSectionComponent } from "../../shared/components/enterprise-section/enterprise-section.component";
import { StatsSectionComponent } from "../../shared/components/stats-section/stats-section.component";
import { UiButtonComponent } from "../../shared/ui-button/ui-button.component";

@Component({
  selector: 'app-bottom-section',
  imports: [ConditionsSectionComponent, StatsSectionComponent, EnterpriseSectionComponent, UiButtonComponent],
  templateUrl: './bottom-section.component.html',
  styleUrl: './bottom-section.component.scss'
})
export class BottomSectionComponent {

}
