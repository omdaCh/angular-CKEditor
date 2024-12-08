import { Component, ViewEncapsulation } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {
    Bold, Essentials, Italic, Paragraph, Undo, List, ClassicEditor, Heading, Link, Table, Image,
    ImageCaption,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Base64UploadAdapter,
    Underline,
    Indent,
} from 'ckeditor5';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import arTranslations from 'ckeditor5/translations/ar.js';
import enTranslations from 'ckeditor5/translations/en.js';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [CKEditorModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatMenuModule, MatCheckboxModule, MatSelectModule, MatIconModule]
})
export class AppComponent {
    title = 'angular';

    public isDisabled: boolean = false;
    public isRtl: boolean = false;
    public editorLanguage: 'en' | 'ar' = 'en';
    public isCustomTheme: boolean = false;

    public showEditor: boolean = true;
    public editorData: string = '<p>Hello, world!</p>';

    public editor = ClassicEditor;
    public config = {
        licenseKey: 'GPL',
        plugins: [Bold, 
            Essentials, 
            Italic, 
            Underline, 
            Paragraph, 
            Undo, 
            List, 
            Indent,
			// IndentBlock,
            Heading, 
            Link, 
            Table, 
            ImageUpload, 
            Image, 
            ImageCaption,
            ImageResize,
            ImageStyle,
            ImageToolbar,
            ImageUpload,
            Base64UploadAdapter],

        toolbar: ['undo', 
            'redo', 
            '|', 
            'heading', 
            '|', 
            'bold', 
            'italic', 
            'underline', 
            '|', 
            'link', 
            'insertTable', 
            'uploadImage', 
            '|', 
            'bulletedList', 
            'numberedList',
            'outdent',
            'indent'],
        language: 'en',
        placeholder: 'Type the content here!',
        translations: [enTranslations]
    }

    constructor() { }


    toggleDisabled() {
        this.isDisabled = !this.isDisabled
    }

    setLanguage(language: 'en' | 'ar') {
        this.showEditor = false;
        if (language == this.editorLanguage)
            return;
        else {
            this.editorLanguage = language;
            setTimeout(() => {
                this.config = {
                    ...this.config,
                    language: this.editorLanguage,
                    translations: [this.editorLanguage == 'en' ? enTranslations : arTranslations]
                };
                this.showEditor = true;
            }, 100);
        }

    }


}
