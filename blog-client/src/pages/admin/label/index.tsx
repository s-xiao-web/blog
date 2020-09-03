import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { Card, Form, Input, Button, Table, Space, Popconfirm, message } from 'antd';

import { AddLabel, getLabel, deleteLable } from '@/api/label';

const { Item } = Form;

const Labels = props => {

  const [labelData, setLabelData] = useState([]); 

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '标签名称',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '关联文章数',
      dataIndex: 'articles',
      key: 'articles',
    },
    {
      title: '操作',
      dataIndex: 'handle',
      key: 'handle',
      render: (text, record) => (
        <Space>
          <Popconfirm 
            title="Are you sure delete this task?"
            onConfirm={() => onConfirm( record )}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link">删除</Button>
          </Popconfirm>
        </Space>
      )
    }
  ];

  useEffect(() => {
    initData();
  }, [])

  return (
    <>
      <Card
        style={{ widht: "100%" }}
      >
        <Form
          layout='inline'
          onFinish={onFinish}
        >
          <Item
            label="标签名称"
            name="content"
          >
            <Input />
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">新增</Button>
          </Item>
        </Form>
      </Card>

      <Table columns={columns} dataSource={labelData}></Table>
    </>
  )

  function onFinish(data) {
    AddLabel(data).then(res => {
      if ( res.data ) {
        initData()
        message.success('标签创建成功'); 
      } else {
        message.warning('该标签存在重复,无法继续添加'); 
      }
    })
  }

  function onConfirm({id}) {
    deleteLable({id}).then(res => {
      initData()
    })
  }

  function initData() {
    getLabel().then(res => {
      setLabelData( get(res, 'data', []) );
    })
  }
}

export default Labels;