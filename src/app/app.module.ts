import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
  faBan,
  faBars,
  faBolt,
  faCircle,
  faCircleInfo,
  faCircleNodes,
  faCircleQuestion,
  faDownload,
  faFloppyDisk,
  faLightbulb,
  faMoon,
  faNetworkWired,
  faPencil,
  faPlugCircleBolt,
  faPlus,
  faRightFromBracket,
  faRightToBracket,
  faSatelliteDish,
  faServer,
  faSlash,
  faSort,
  faSortDown,
  faSortUp,
  faSun,
  faTrash,
  faUpload,
  faUserPlus,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import {HttpClientModule} from "@angular/common/http";
import {HawkCoreApiModule} from "./api/hawk-core-api.module";
import {SharedModule} from "./shared/shared.module";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {faIntercom} from "@fortawesome/free-brands-svg-icons";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    HawkCoreApiModule,
    ConfirmDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faDownload,
      faUpload,
      faPlus,
      faTrash,
      faPencil,
      faMoon,
      faSort,
      faSortUp,
      faSortDown,
      faSun,
      faAngleLeft,
      faAnglesLeft,
      faAngleRight,
      faAnglesRight,
      faXmark,
      faFloppyDisk,
      faRightToBracket,
      faUserPlus,
      faRightFromBracket,
      faCircleNodes,
      faCircle,
      faCircleQuestion,
      faSlash,
      faBan,
      faCircleInfo,
      faBolt,
      faPlugCircleBolt,
      faLightbulb,
      faBars,
      faSatelliteDish,
      faServer,
      faIntercom,
      faNetworkWired
    );
  }
}
