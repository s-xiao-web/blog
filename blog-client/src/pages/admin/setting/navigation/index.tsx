import React, { useState } from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Form, Card, Button } from 'antd';
import AddNavDialog from './components/AddNavDialog'
import EditableCell from './components/EditableCell'
interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

const originData: Item[] = [];
for (let i = 0; i < 4; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const NavTable = ({
  dispatch, menuList
}) => {
  console.log( 'menuList', menuList );
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const [visible, setVisble] = useState(false);

  const isEditing = (record: Item) => record.key === editingKey;

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a href="javascript:;" onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <a disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </a>
        );
      },
    },
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => {
        return ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        })
      },
    };
  });

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
            pagination={false}
            dataSource={data}
            columns={mergedColumns}
            rowClassName="editable-row"
          />
        </Form>
      </Card>
    </>
  );

  async function save(key: React.Key) {
    try {
      const row = (await form.validateFields()) as Item;
      
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);
      
      console.log(index);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  }

  function edit(record: Item) {
    form.setFieldsValue({ name: '', age: '', address: '', ...record });
    setEditingKey(record.key);
  };

  function cancel() {
    setEditingKey('');
  };
  function handleDialigColse() {
    setVisble(false)
  }

  function addMenuItem(values) {
    dispatch({
      type: 'admin-menu/addMenu',
      payload: values
    })
  }
};


export default connect((state) => {
  
  return {
    menuList: state['admin-menu'].menu
  }
})(NavTable)