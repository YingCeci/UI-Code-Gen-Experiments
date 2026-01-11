import { Component } from '@angular/core';
import { ExosVerifyRightPanelComponent } from './components/exos-verify-right-panel/exos-verify-right-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExosVerifyRightPanelComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  onSubmit(): void {
    console.log('Submit clicked');
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
