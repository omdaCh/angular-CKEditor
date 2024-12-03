// app.component.ts

import { Component, ViewEncapsulation } from '@angular/core';
import { ChangeEvent, CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { Bold, Essentials, Italic, Paragraph, Undo, List, ClassicEditor } from 'ckeditor5';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [CKEditorModule, MatButtonModule,FormsModule ],
    standalone: true
})
export class AppComponent {
    title = 'angular';

    public isDisabled: boolean = false;
    public isRtl: boolean = false;
    public showEditor: boolean = true;
    public editorData: string = '<p>Hello, world!</p>';

    public editor = ClassicEditor;
    public config = {
        plugins: [Bold, Essentials, Italic, Paragraph, Undo, List],
        toolbar: ['undo', 'redo', '|', 'bold', 'italic', 'bulletedList'],
        language: 'fr'
    }


    toggleDisabled() {
        this.isDisabled = !this.isDisabled
    }

    toggleEditorDirection() {
        this.isRtl = !this.isRtl;
        this.showEditor = false;
        this.editorData 
        setTimeout(() => {
            this.config = {
                ...this.config,
                language: this.isRtl ? 'ar' : 'fr'
            };
            this.showEditor = true;
        }, 100)
    }

    
}
