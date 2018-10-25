import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./component/login/login.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./component/home/home.component";
import { AppRoutingModule } from "./app.routes";

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
