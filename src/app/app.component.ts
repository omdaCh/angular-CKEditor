// app.component.ts

import { Component, ViewEncapsulation } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { Bold, Essentials, Italic, Paragraph, Undo, List, ClassicEditor, Heading } from 'ckeditor5';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import coreTranslations from 'ckeditor5/translations/ar.js';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [CKEditorModule, FormsModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatSelectModule],
    standalone: true
})
export class AppComponent {
    title = 'angular';

    public isDisabled: boolean = false;
    public isRtl: boolean = false;
    public selectedLanguage: 'English' | 'Arabic' = 'English';
    public isCustomTheme: boolean = false;

    public showEditor: boolean = true;
    public editorData: string = '<p>Hello, world!</p>';

    public editor = ClassicEditor;
    public config = {
        plugins: [Bold, Essentials, Italic, Paragraph, Undo, List, Heading],
        toolbar: ['undo', 'redo', '|', 'bold', 'italic', 'bulletedList', 'heading'],
        language: 'ar',
        placeholder: 'Type the content here!',
        translations: [coreTranslations],

    }

    constructor() {
        // if (this.editor.defaultConfig) {
        //     this.editor.defaultConfig.language = 'ar'; // Set default language
        //     // this.editor.defaultConfig.translations = {
        //     //     ...this.editor.defaultConfig.translations,
        //     //     ar: coreTranslations,
        //     // };
        // } else {
        //     console.error('CKEditor defaultConfig is not defined.');
        // }
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
                language: this.isRtl ? 'ar' : 'fr',
                // translations: [
                //     coreTranslations
                // ]
            };
            this.showEditor = true;
        }, 100)
    }


}
