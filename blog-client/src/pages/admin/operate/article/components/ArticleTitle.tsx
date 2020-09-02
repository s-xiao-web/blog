import React from 'react';
import { Select, Input } from 'antd';

import Item from './ArticleItem'

const { Option } = Select;


const ArticleTitle = (props) => {

  return (
    <Item {...props}>
      <Input />
    </Item>
  )

}

export default ArticleTitle;