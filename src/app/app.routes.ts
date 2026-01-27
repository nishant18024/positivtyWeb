import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BipolarDisorderComponent } from './pages/mental-health-conditions/bipolar-disorder/bipolar-disorder.component';
import { DepressionComponent } from './pages/mental-health-conditions/depression/depression.component';
import { SchizophreniaComponent } from './pages/mental-health-conditions/schizophrenia/schizophrenia.component';
import { PtsdComponent } from './pages/mental-health-conditions/ptsd/ptsd.component';
import { AddictionsComponent } from './pages/mental-health-conditions/addictions/addictions.component';
import { EatingDisordersComponent } from './pages/mental-health-conditions/eating-disorders/eating-disorders.component';
import { AdjustmentDisordersComponent } from './pages/mental-health-conditions/adjustment-disorders/adjustment-disorders.component';
import { AeneralizedAnxietyComponent } from './pages/mental-health-conditions/aeneralized-anxiety/aeneralized-anxiety.component';
import { DisruptiveBehaviorComponent } from './pages/mental-health-conditions/disruptive-behavior/disruptive-behavior.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'bipolar-disorder', component: BipolarDisorderComponent },
    { path: 'depression', component: DepressionComponent },
    { path: 'disruptive-behavior', component: DisruptiveBehaviorComponent },
    { path: 'schizophrenia', component: SchizophreniaComponent },
    { path: 'aeneralized-anxity', component: AeneralizedAnxietyComponent },
    { path: 'adjustment-disorders', component: AdjustmentDisordersComponent },
    { path: 'ptsd', component: PtsdComponent },
    { path: 'addictions', component: AddictionsComponent },
    { path: 'eating-disorders', component: EatingDisordersComponent },
];
