import React, { useEffect, useState } from 'react';
import BraftEditor from 'braft-editor';

import 'braft-editor/dist/index.css'
import 'braft-editor/dist/output.css'
import style from './index.less'

const BasicDemo = () => {

  const editorState = BraftEditor.createEditorState('<p>Hello <b>World!</b></p>')
  const [editor, setEditor] = useState(editorState)
  const [textVal, setTextVal] = useState('')
  return (
    <div className={style['editor-container']}>
        <div className="editor-wrapper" style={{
          height: '500px'
        }}>
          <BraftEditor
            value={editor}
            onChange={handleChange}
          />
        </div>
        <h5>输出内容</h5>
        <div className="output-content">{textVal}</div>
        <div
        className='editor-wrapper'
        dangerouslySetInnerHTML={{__html: textVal }} />
      </div>
  )

  function handleChange(editorState) {
    setEditor(editorState);
    setTextVal( editorState.toHTML() )
  }
}
export default BasicDemo;