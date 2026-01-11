import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DocumentIssue {
  label: string;
  description: string;
}

export interface DocumentSection {
  name: string;
  issues: DocumentIssue[];
}

@Component({
  selector: 'app-document-correction-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-correction-panel.component.html',
  styleUrls: ['./document-correction-panel.component.scss']
})
export class DocumentCorrectionPanelComponent {
  @Input() orderNumber: string = 'XK-9247';
  @Input() documents: DocumentSection[] = [
    {
      name: 'Zephyr',
      issues: [
        { label: 'QTR-A', description: 'Kryptex volupta nexium' },
        { label: 'QTR-B', description: 'Fluxon meridia cortex' }
      ]
    },
    {
      name: 'Nebula',
      issues: [
        { label: 'SEC-7', description: 'Praxil entoma vexlar' },
        { label: 'SEC-9', description: 'Dynex quoril fentara' }
      ]
    },
    {
      name: 'Vertex',
      issues: [
        { label: 'MOD-X', description: 'Zentari proxima velox' },
        { label: 'MOD-Y', description: 'Corvax nexion tremula' }
      ]
    }
  ];

  @Output() submitAsIs = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();
  @Output() upload = new EventEmitter<{ documentName: string; files: FileList }>();
  @Output() pageClick = new EventEmitter<{ documentName: string; label: string }>();

  dragOver: { [key: string]: boolean } = {};

  onSubmitAsIs(): void {
    this.submitAsIs.emit();
  }

  onBack(): void {
    this.back.emit();
  }

  onUpload(): void {
    // This would trigger the main upload action
  }

  onPageClick(documentName: string, label: string): void {
    this.pageClick.emit({ documentName, label });
  }

  onDragOver(event: DragEvent, documentName: string): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver[documentName] = true;
  }

  onDragLeave(event: DragEvent, documentName: string): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver[documentName] = false;
  }

  onDrop(event: DragEvent, documentName: string): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver[documentName] = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.upload.emit({ documentName, files });
    }
  }

  onFileSelect(event: Event, documentName: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.upload.emit({ documentName, files: input.files });
    }
  }

  triggerFileInput(documentName: string): void {
    const fileInput = document.getElementById(`file-input-${documentName}`) as HTMLInputElement;
    fileInput?.click();
  }
}
