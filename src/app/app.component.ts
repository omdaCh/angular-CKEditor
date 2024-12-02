// app.component.ts

import { Component, ViewEncapsulation } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {  Bold, Essentials, Italic, Paragraph, Undo, DecoupledEditor, List, ClassicEditor } from 'ckeditor5';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [ CKEditorModule ],
    standalone: true
} )
export class AppComponent {
    title = 'angular';

    public Editor = ClassicEditor;
    public config = {
        plugins: [ Bold, Essentials, Italic, Paragraph, Undo, List  ],
        toolbar: [ 'undo', 'redo', '|', 'bold', 'italic' , 'bulletedList']
    }
}
