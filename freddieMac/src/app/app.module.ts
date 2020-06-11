import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaincompComponent } from './components/maincomp/maincomp.component';
import { HttpClientModule } from '@angular/common/http';
import { ImgcompareService } from './services/imgcompare.service';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MaincompComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [ImgcompareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
