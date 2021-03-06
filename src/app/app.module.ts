import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import {WarningComponent} from './warning/warning.component';
import {AlertComponent} from './alert/alert.component'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ServersComponent,
    ServerComponent,
    WarningComponent,
    AlertComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
