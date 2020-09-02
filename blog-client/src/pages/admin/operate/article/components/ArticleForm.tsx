import React from 'react'
import { Form, Input, Button, Select } from 'antd';

import style from './ArticleForm.less'



const ArticleForm = (props) => {
  const layout = {
    labelCol: { span: 3 }
  };

  return (
    <div className={style['article-form-wrapper']}>
      <Form
        {...layout}
        {...props}
        name="basic"
        initialValues={{ remember: true }}
      >
        <div>
          { props.children }
        </div>
      </Form>
    </div>
  )
}

export default ArticleForm;