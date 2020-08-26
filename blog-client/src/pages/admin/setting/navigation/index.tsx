import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Form, Card, Button, message } from 'antd';
import { get } from 'lodash';

import AddNavDialog from './components/AddNavDialog'
import EditableCell from './components/EditableCell'

interface Item {
  id: string;
  value: string;
  path: string;
}

const NavTable = ({
  dispatch, menuList
}) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(menuList);
  const [editingKey, setEditingKey] = useState('');
  const [visible, setVisble] = useState(false);

  const isEditing = (record: Item) => record.id === editingKey;

  const columns = [
    {
      title: 'value',
      dataIndex: 'value',
      width: '25%',
      editable: true,
    },
    {
      title: 'path',
      dataIndex: 'path',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <div>
            <Button type="link" onClick={() => save(record.id)} style={{ marginRight: 8 }}>保存</Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}><a>取消</a></Popconfirm>
          </div>
        ) : (
          <>
            <Button type="link" disabled={editingKey !== ''} onClick={() => edit(record)}>编辑</Button>
            <Popconfirm title="Sure to cancel?" onConfirm={() => deleteMenu(record.id)}><a>删除</a></Popconfirm>
          </>
        );
      },
    },
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editable) return col;
    return {
      ...col,
      onCell: (record: Item) => {
        return ({
          record,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        })
      },
    };
  });

  useEffect(() => {
    dispatch({ type: 'adminMenu/getMenu' });
  }, [dispatch])

  return (
    <>
      <AddNavDialog visible={visible} onClose={handleDialigColse} onFinish={addMenuItem}/>
      <Card title="Default size card" extra={<Button type="primary" onClick={() => setVisble(true)}>新增</Button>}>
        <Form form={form} component={false}>
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            rowKey="path"
            pagination={false}
            dataSource={menuList}
            columns={mergedColumns}
            rowClassName="editable-row"
          />
        </Form>
      </Card>
    </>
  );

  async function save(id: React.Key) {
    try {
      const row = (await form.validateFields()) as Item;
      const newData = [...data];
      const index = newData.findIndex(item => id === item.id);
      const item = newData[index];
      dispatch({
        type: 'adminMenu/updateMenu',
        payload: { id, ...row },
        callback() {
          message.success('success');
          newData.splice(index, 1, {
            ...item,
            ...row,
          });
          setEditingKey('');
        }
      })
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  }

  function deleteMenu(id: React.key) {
    dispatch({
      type: 'adminMenu/deleteMenu',
      payload: { id },
      callback() {message.success('success')}
    })
  }

  function edit(record: Item) {
    form.setFieldsValue({ ...record });
    setEditingKey(record.id);
  };

  function cancel() {
    setEditingKey('');
  };

  function handleDialigColse() {
    setVisble(false)
  };

  function addMenuItem(values) {
    dispatch({
      type: 'adminMenu/addMenu',
      payload: values,
      callback() {handleDialigColse()}
    })
  }
};


export default connect( ({ adminMenu })  => ({
  menuList: get( adminMenu, 'menu', [] )
}))(NavTable)