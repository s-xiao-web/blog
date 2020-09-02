import React from 'react';
import { Button } from 'antd';
import Item from './ArticleItem'

import style from './ArticleButton.less'
const ArticleButton = props => {

  return (
    <Item {...props}>
      <div className={style['btn-wrap']}>
        <Button type="primary" htmlType="submit">{props.children}</Button>
      </div>
    </Item>
  )

};

export default ArticleButton;
