import React, { useState } from 'react';
import { Modal, Form, Input, message } from 'antd';


const AddNavDialog = ({
  visible,
  onClose,
  onFinish
}) => {

  const [form] = Form.useForm()

  return (

    <Modal
      title="新增菜单"
      visible={visible}
      onOk={handleOk}
      onCancel={onClose}
    >
      <Form
        form={form}
      >
        <Form.Item
          label="菜单名称"
          name="value"
          rules={[{ required: true, message: '请输入名称' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="菜单路径"
          name="path"
          rules={[{ required: true, message: '请输入路径' }]}
        >
          <Input />
        </Form.Item>
        
      </Form>
    </Modal>

  )
  
  function handleOk() {
    form.validateFields().then( values => {
      onFinish && onFinish(values);
    })
  }
  
}

export default AddNavDialog