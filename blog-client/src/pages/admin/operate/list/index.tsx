import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { get } from 'lodash';
import { Table, Space, Button, Popconfirm, Card, Modal  } from 'antd';

import EditorArticle from './components/article';

const style = { top: 0 };

const OperateList = props => {

  const { dispatch } = props;
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(true);
  const [initFormData, setInitFormData] = useState({title: '1', label: [], comment: '3'})

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      render: text => <a>{text}</a>,
    }, 
    {
      title: '创建人',
      key: 'username',
    }, 
    {
      title: '所属标签',
      dataIndex: 'label',
      key: 'label',
    }, 
    {
      title: '点赞数',
      dataIndex: 'like',
      key: 'like',
    }, 
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
    }, 
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    }, 
    {
      title: '操作',
      dataIndex: 'handle',
      key: 'handle',
      render: (text, record) => {
        return (
          <Space>
            <Button type="link">详情</Button>
            <Popconfirm
              title="是否要删除该条消息"
              onConfirm={() => confirm(record)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="link">删除</Button>
            </Popconfirm>
          </Space>
        )
      }
    }
  ]

  const $extraBtn = <Button type="primary" onClick={changeModalState} >新增</Button>;

  useEffect(() => initData(), [initData])

  return (
    <>
      <Card title="文章列表" extra={ $extraBtn }>
        <Table columns={columns} dataSource={data} rowKey="id"></Table>
      </Card>

      <Modal
        title="新增文章"
        visible={visible}
        footer={null}
        onCancel={changeModalState}
        width="80%"
        destroyOnClose
        style={{...style}}
      >
        <EditorArticle
          initFormData={initFormData}
          onFinish={onFinish}
        ></EditorArticle>
      </Modal>
    </>
  )

  function confirm(record) {
    const id = get(record, 'id', 0)
    dispatch({
      type: 'adminArticle/deleteArticle',
      payload: { id },
      callBack: () => initData()
    })
  }


  function onFinish(val) {
    dispatch({
      type: 'adminArticle/addArticles',
      payload: {
        ...val
      },
      callBack: () => {
        initData();
        changeModalState();
      }
    })
  }

  // 弹窗的显示
  function changeModalState() {
    setVisible(!visible)
  }

  function initData() {
    dispatch({
      type: 'adminArticle/getList',
      payload: {},
      callBack: res => setData(res.data || [])
    })
  }

}

export default connect(state => ({}))(OperateList);