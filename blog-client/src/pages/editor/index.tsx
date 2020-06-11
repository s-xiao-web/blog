import React, { useEffect, useState } from 'react';
import BraftEditor from 'braft-editor';
import CodeHighlighter from 'braft-extensions/dist/code-highlighter';

import { Button } from 'antd';

import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/code-highlighter.css'
import style from './index.less'

BraftEditor.use(CodeHighlighter())

const BasicDemo = () => {

  const editorState = BraftEditor.createEditorState('<p>Hello <b>World!</b></p>')
  const [editor, setEditor] = useState(editorState)
  const [textVal, setTextVal] = useState('')

  const extendControls = [
    {
      key: 'custom-button',
      type: 'button',
      text: '预览',
      onClick: preview
    }
  ]

  return (
    <div className={style['editor-container']}>
      <div className="editor-container" style={{
        height: '500px',
        overflow: 'hidden'
      }}>
        <BraftEditor
          value={editor}
          extendControls={extendControls}
          onChange={handleChange}
        />
      </div>
      <h5>输出内容</h5>
      <div className="output-content">{textVal}</div>
      <Button onClick={getEditor} style={{marginTop: '30px'}}>获取</Button>
      <div
      className='editor-wrapper'
      dangerouslySetInnerHTML={{__html: textVal }} />
    </div>
  )

  function handleChange(editorState) {
    setEditor(editorState);
    setTextVal( editorState.toHTML() )
  }

  function getEditor() {
    console.log( textVal );
  }

  function preview() {

    if (window.previewWindow) {
      window.previewWindow.close()
    }

    window.previewWindow = window.open()
    window.previewWindow.document.write(buildPreviewHtml())
    window.previewWindow.document.close()

  }

  function buildPreviewHtml() {
    return `
    <!Doctype html>
    <html>
      <head>
        <title>Preview Content</title>
        <style>
          html,body{
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: auto;
            background-color: #f1f2f3;
          }
          .container{
            box-sizing: border-box;
            width: 1000px;
            max-width: 100%;
            min-height: 100%;
            margin: 0 auto;
            padding: 30px 20px;
            overflow: hidden;
            background-color: #fff;
            border-right: solid 1px #eee;
            border-left: solid 1px #eee;
          }
          .container img,
          .container audio,
          .container video{
            max-width: 100%;
            height: auto;
          }
          .container p{
            white-space: pre-wrap;
            min-height: 1em;
          }
          .container pre{
            padding: 15px;
            background-color: #f1f1f1;
            border-radius: 5px;
          }
          .container blockquote{
            margin: 0;
            padding: 15px;
            background-color: #f1f1f1;
            border-left: 3px solid #d1d1d1;
          }
        </style>
      </head>
      <body>
        <div class="container">${textVal}</div>
      </body>
    </html>
  `
  }
}
export default BasicDemo;