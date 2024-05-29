import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { ArticlesComponent } from './articles/articles.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';
import { FeaturesComponent } from './features/features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TeamMeamberComponent } from './team-meamber/team-meamber.component';
import { ServicesComponent } from './services/services.component';
import { SkillComponent } from './skill/skill.component';
import { HOWItWORKSComponent } from './how-it-works/how-it-works.component';
import { EventsComponent } from './events/events.component';
import { PricingComponent } from './pricing/pricing.component';
import { TopVidoesComponent } from './top-vidoes/top-vidoes.component';
import { StatComponent } from './stat/stat.component';
import { DiscountComponent } from './discount/discount.component';
import { FooterComponent } from './footer/footer.component';
import { SpikesComponent } from './spikes/spikes.component';
import { DotsComponent } from './dots/dots.component';
import { ShowItemComponent } from './show-item/show-item.component'; // استيراد HttpClientModule
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    MainTitleComponent,
    ArticlesComponent,
    GalleryComponent,
    FeaturesComponent,
    TestimonialsComponent,
    TeamMeamberComponent,
    ServicesComponent,
    SkillComponent,
    HOWItWORKSComponent,
    EventsComponent,
    PricingComponent,
    TopVidoesComponent,
    StatComponent,
    DiscountComponent,
    FooterComponent,
    SpikesComponent,
    DotsComponent,
    ShowItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
