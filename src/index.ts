import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfJsViewerComponent } from './ngx-pdf-viewer.component';

export * from './ngx-pdf-viewer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PdfJsViewerComponent
  ],
  exports: [
    PdfJsViewerComponent
  ]
})
export class PdfJsViewerModule {
  static forRoot(): ModuleWithProviders<PdfJsViewerModule> {
    return {
      ngModule: PdfJsViewerModule
    };
  }
}
