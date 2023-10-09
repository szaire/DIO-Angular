import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { EntryDataComponent } from './entry-data/entry-data.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, EntryDataComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
