import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HowItWorksComponent } from "./shared/components/how-it-works/how-it-works.component";
import { TherapyCardSectionComponent } from "./shared/components/therapy-card-section/therapy-card-section.component";
import { LifeStageCardSectionComponent } from "./shared/components/life-stage-card-section/life-stage-card-section.component";
import { WhyChoosePositivtyComponent } from "./shared/components/why-choose-positivty/why-choose-positivty.component";
import { HeroSectionComponent } from "./pages/hero-section/hero-section.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HowItWorksComponent, TherapyCardSectionComponent, LifeStageCardSectionComponent, WhyChoosePositivtyComponent, HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Positivty';
}
