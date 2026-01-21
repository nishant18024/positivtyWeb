import { Component } from '@angular/core';
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { RouterModule } from "@angular/router";
import { HowItWorksComponent } from "../../shared/components/how-it-works/how-it-works.component";
import { TherapyCardSectionComponent } from "../../shared/components/therapy-card-section/therapy-card-section.component";
import { LifeStageCardSectionComponent } from "../../shared/components/life-stage-card-section/life-stage-card-section.component";
import { WhyChoosePositivtyComponent } from "../../shared/components/why-choose-positivty/why-choose-positivty.component";
import { TherapistCardSectionComponent } from "../../shared/components/therapist-card-section/therapist-card-section.component";
import { HeroSectionComponent } from "../../pages/hero-section/hero-section.component";
import { SessionPackageCardSectionComponent } from "../../shared/components/session-package-card-section/session-package-card-section.component";
import { GiftSessionComponent } from "../../pages/gift-session/gift-session.component";
import { BottomSectionComponent } from "../../pages/bottom-section/bottom-section.component";

@Component({
  selector: 'app-home',
  imports: [BannerComponent, RouterModule, HowItWorksComponent, TherapyCardSectionComponent, LifeStageCardSectionComponent, WhyChoosePositivtyComponent, TherapistCardSectionComponent, HeroSectionComponent, SessionPackageCardSectionComponent, GiftSessionComponent, BottomSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
