import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ********** COMPONENTS ********** //
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// ********** MATERIAL ********** //
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
