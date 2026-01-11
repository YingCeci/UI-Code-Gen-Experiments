import { Component } from '@angular/core';
import { DocumentCorrectionPanelComponent } from './components/document-correction-panel/document-correction-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DocumentCorrectionPanelComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  onSubmitAsIs(): void {
    console.log('Submit As Is clicked');
  }

  onBack(): void {
    console.log('Back clicked');
  }

  onUpload(event: { documentName: string; files: FileList }): void {
    console.log('Upload:', event.documentName, event.files);
  }

  onPageClick(event: { documentName: string; label: string }): void {
    console.log('Page clicked:', event.documentName, event.label);
  }
}
