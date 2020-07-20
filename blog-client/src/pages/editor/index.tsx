import React, { useEffect, useState } from 'react';

import EditorForm from './components';

import { postCreateArticle, getArticleList } from '../../api/article'
import Highlight from 'react-highlight';

import 'highlight.js/styles/atelier-cave-dark.css';
import style from './index.less'

const { ArticleForm, ArticleTitle, ArticleLabel, ArticleText, ArticleButton } = EditorForm;

const BasicDemo = () => {
  

  const [ eleHtml, setEleHtml ] = useState('');

  // useEffect(() => {
  //   getArticleList({id: 1}).then(res => {
  //     setEle(res.comment)
  //   })
  // }, [])

  return (
    <div className={style['editor-container']}>
      <ArticleForm 
        onFinish={onSubmit}
        onFinishFailed={finishFailed}
      >
        <ArticleTitle
          label="文章标题"
          name="titlle"
          rules={[{ required: true, message: 'Please input your username!' }]}
        />

        <ArticleLabel
          label="所属标签"
          name="label"
          rules={[{ required: true, message: 'Please input your username!' }]}
        />

        <ArticleText 
          label="文章正文"
          name="value"
          rules={[{ required: true, message: 'Please input your username!' }]}
        />

        <ArticleButton>sublimt</ArticleButton>

      </ArticleForm>

      {/*
        <div
          className='editor-wrapper'
          dangerouslySetInnerHTML={{__html: ele }}
        >
        </div>

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
        dangerouslySetInnerHTML={{__html: textVal }} /> */}

      <Highlight innerHTML={true} className={'echo-container'}>{eleHtml}</Highlight>
    </div>
  )

  function onSubmit(value) {
    console.log('这里是准备要提交c的数据', value);
    const sendData = value.value
    console.log( sendData.toHTML() );
    setEleHtml( sendData.toHTML() )
  }

  function finishFailed() {

  }

  function handleChange(editorState) {
    setEditor(editorState);
    setTextVal( editorState.toHTML() );
  }

  function getEditor() {
    postCreateArticle(textVal).then(res => {
      console.log(res);
    })
  }

  function preview() {

    if (window.previewWindow) {
      window.previewWindow.close()
    }

    window.previewWindow = window.open()
    window.previewWindow.document.write(buildPreviewHtml())
    window.previewWindow.document.close()

  }

  function onFinish() {

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