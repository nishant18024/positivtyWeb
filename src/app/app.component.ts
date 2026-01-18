import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HowItWorksComponent } from "./shared/components/how-it-works/how-it-works.component";
import { TherapyCardSectionComponent } from "./shared/components/therapy-card-section/therapy-card-section.component";
import { LifeStageCardSectionComponent } from "./shared/components/life-stage-card-section/life-stage-card-section.component";
import { WhyChoosePositivtyComponent } from "./shared/components/why-choose-positivty/why-choose-positivty.component";
import { HeroSectionComponent } from "./pages/hero-section/hero-section.component";
import { TherapistCardSectionComponent } from "./shared/components/therapist-card-section/therapist-card-section.component";
import { SessionPackageCardSectionComponent } from "./shared/components/session-package-card-section/session-package-card-section.component";
import { GiftSessionComponent } from "./pages/gift-session/gift-session.component";
import { BottomSectionComponent } from "./pages/bottom-section/bottom-section.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HowItWorksComponent, TherapyCardSectionComponent, LifeStageCardSectionComponent, WhyChoosePositivtyComponent, HeroSectionComponent, TherapistCardSectionComponent, SessionPackageCardSectionComponent, GiftSessionComponent, BottomSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Positivty';
}
