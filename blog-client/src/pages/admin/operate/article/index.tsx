import React from 'react';
import { Card, Button } from 'antd';

const ArticleList = props => {

  return (
  <>
    <Card title="Article_List" 
      extra={<Button type="primary" onClick={() => setVisble(true)}>新增</Button>}
    ></Card>
  </>
  )
  
  function setVisble(va) {}

}

export default ArticleList;