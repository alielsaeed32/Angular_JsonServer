import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { IndexComponent } from './Components/index/index.component';
import { ContentComponent } from './Components/content/content.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductComponent } from './Components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShadowDirective } from './Directives/shadow.directive';
import { EyptianIDPipe } from './Pipes/eyptian-id.pipe';
import { CreidtCardPipe } from './Pipes/creidt-card.pipe';
import { CartParentComponent } from './Components/Cart/cart-parent/cart-parent.component';
import { CartChildComponent } from './Components/Cart/cart-child/cart-child.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetalisComponent } from './Components/product-detalis/product-detalis.component';
import { AddProductComponent } from './Components/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    IndexComponent,
    ContentComponent,
    FooterComponent,
    ProductComponent,
    ShadowDirective,
    EyptianIDPipe,
    CreidtCardPipe,
    CartParentComponent,
    CartChildComponent,
    NotFoundComponent,
    ProductDetalisComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
