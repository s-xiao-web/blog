import React from 'react';
import { Form } from 'antd';

const { Item } = Form;

const AtricleItem = (props) => {

  return (
    <Item {...props}>
      { props.children }
    </Item>
  )

};

export default AtricleItem;