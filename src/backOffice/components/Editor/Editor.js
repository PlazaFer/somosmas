import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const Editor = ({text,onChangeText}) => {

    return (
        <CKEditor
                editor={ClassicEditor}
                data = {text}
                onChange={(event, editor) => {onChangeText(editor.getData())}}
            />
    )
}

export default Editor