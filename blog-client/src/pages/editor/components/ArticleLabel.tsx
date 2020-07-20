import React from 'react';
import { Select, Form } from 'antd';

import Item from './ArticleItem'

const { Option } = Select;

const ArticleLabel = (props) => {
  
  const children = [];



  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i} value={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

 

  return (
    <Item {...props}>
      <Select
        getPopupContainer={ triggerNode => triggerNode.parentNode }
        style={{ width: '100%' }}
        placeholder="Please select"
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        {children}
      </Select>
    </Item>
  )

}

export default ArticleLabel;