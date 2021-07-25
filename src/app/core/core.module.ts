import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeDataService } from './services/fake-data.service';
import { AppComponent } from './containers/app/app.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [AppComponent, LayoutComponent],
})
export class CoreModule {}
