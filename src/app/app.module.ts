import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './Nav/Nav.component';
import { FooterComponent } from './Footer/Footer.component';
import { SobreComponent } from './Sobre/Sobre.component';
import { LocalizacaoComponent } from './Localizacao/Localizacao.component';

@NgModule({
  declarations: [					
    AppComponent,
      HomeComponent,
      NavComponent,
      FooterComponent,
      SobreComponent,
      LocalizacaoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
