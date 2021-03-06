import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SpinnerModule } from "@scrum/web/shared/dumbs/spinner/spinner.module";
import { JoinPipeModule } from "@scrum/web/shared/pipes/join/join-pipe.module";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { RegisterFormComponent } from './register-form.component';

@NgModule({
  declarations: [RegisterFormComponent],
  exports: [RegisterFormComponent],
  imports: [CommonModule, InputTextModule, JoinPipeModule, FormsModule, ButtonModule, SpinnerModule]
})
export class RegisterFormModule {}
