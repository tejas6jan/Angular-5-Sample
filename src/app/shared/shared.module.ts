import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MessageService } from './message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [MessageService]
})
export class SharedModule { }
