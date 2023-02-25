import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {TableModule} from 'primeng/table';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {ButtonComponent} from './components/button/button.component';
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OverlayComponent} from './components/overlay/overlay.component';
import {DialogService} from 'primeng/dynamicdialog';
import {InputComponent} from './components/input/input.component';
import {InputTextModule} from 'primeng/inputtext';
import {ControlErrorComponent} from './components/control-error/control-error.component';
import {FormFrameComponent} from './components/form-frame/form-frame.component';
import {DropdownModule} from "primeng/dropdown";
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    OverlayComponent,
    InputComponent,
    ControlErrorComponent,
    FormFrameComponent,
    LoadingSpinnerComponent,
  ],
  exports: [
    HeaderComponent,
    OverlayComponent,
    InputComponent,
    ButtonComponent,
    ControlErrorComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    ProgressSpinnerModule,
  ],
  providers: [ConfirmationService, DialogService],
})
export class GlobalUiModule {}
