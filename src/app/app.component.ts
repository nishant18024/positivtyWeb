import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { filter, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { SeoService } from './core/services/seo/seo.service';
import { SEO_CONFIG } from './core/services/seo/seo.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  showHeaderFooter = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService
  ) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .subscribe((route) => {
        route.data.subscribe(data => {
          this.showHeaderFooter = !data['hideLayout'];

          // Get clean path without query strings or hash segments
          const cleanPath = this.router.url.split('?')[0].split('#')[0];

          // Lookup SEO data from config, fallback to default behavior
          if (SEO_CONFIG[cleanPath]) {
            this.seoService.updateSeoData(SEO_CONFIG[cleanPath]);
          } else {
            // Let dynamic components handle their own SEO, or reset if none exists
            if (!this.router.url.includes('/job/')) {
              this.seoService.updateSeoData({});
            }
          }
        });
      });
  }
}