import { ImageEditor } from './image-editor';
import { Memento } from './memento';

export class ImageEditorBackupManager {
  private mememtos: Memento[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`BACKUP: saving imageEditor state`);

    this.mememtos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mememtos.pop();

    if (!memento) {
      console.log('Backup: On mementos');
      return;
    }

    this.imageEditor.restore(memento);
    console.log(`Backup: ${memento.getName()} it was restored with success`);
  }

  showMementos(): void {
    for (const memento of this.mememtos) {
      console.log(memento);
    }
  }
}
