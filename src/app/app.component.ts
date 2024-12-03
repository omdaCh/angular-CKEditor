// app.component.ts

import { Component, ViewEncapsulation } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {  Bold, Essentials, Italic, Paragraph, Undo, List, ClassicEditor } from 'ckeditor5';
import { MatButtonModule } from '@angular/material/button';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [ CKEditorModule, MatButtonModule ],
    standalone: true
} )
export class AppComponent {
    title = 'angular';

    public isDisabled:boolean = false;
    public isRlt:boolean = false;

    public Editor = ClassicEditor;
    public config = {
        plugins: [ Bold, Essentials, Italic, Paragraph, Undo, List  ],
        toolbar: [ 'undo', 'redo', '|', 'bold', 'italic' , 'bulletedList'],
        language: 'ar'
    }


    toggleDisabled() {
        this.isDisabled = !this.isDisabled
    }

    switchDisplayDirection(){
        // this.config = { 
        //     ...this.config,
        //     language:'ar'
        // }
    }
}
