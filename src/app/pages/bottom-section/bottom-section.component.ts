import { Component } from '@angular/core';
import { ConditionsSectionComponent } from "../../shared/components/conditions-section/conditions-section.component";
import { EnterpriseSectionComponent } from "../../shared/components/enterprise-section/enterprise-section.component";
import { StatsSectionComponent } from "../../shared/components/stats-section/stats-section.component";

@Component({
  selector: 'app-bottom-section',
  imports: [ConditionsSectionComponent, StatsSectionComponent],
  templateUrl: './bottom-section.component.html',
  styleUrl: './bottom-section.component.scss'
})
export class BottomSectionComponent {

}
