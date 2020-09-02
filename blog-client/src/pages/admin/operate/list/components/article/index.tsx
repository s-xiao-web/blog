import React, { useState, useEffect  } from 'react';
import { get } from 'lodash';
import { Form, Input, Select, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import ImgCrop  from 'antd-img-crop'

import EditorForm from './components';



import style from './index.less';

import EditorTxt from './components/ArticleText'

const { ArticleButton } = EditorForm;

const { Option } = Select;

const EditorContent = ({
  initFormData,
  onFinish,
  onFinishFailed,
}) => {
  const children = [];
  const layout = { labelCol: { span: 3 } };

  const [ form ] = Form.useForm();

  const loading = false
  const [imageUrl, setImageUrl] = useState('')
  

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i} value={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  useEffect(() => {
    console.log('这里执行了', initFormData);
    form.setFieldsValue({...initFormData})
  }, [form, initFormData])

  return (
    <div className={style['editor-container']}>
      <Form
        {...layout}
        name="basic"
        form={form}
        initialValues={{initFormData }}
        onFinish={onSubmit}
        onFinishFailed={finishFailed}
      >
        <Form.Item
          label="文章标题"
          name="title"
          rules={[{ required: true, message: 'Please input your title!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="所属标签"
          name="label"
          rules={[{ required: true, message: 'Please input your label!' }]}
        >
          <Select
            mode="tags"
            getPopupContainer={ triggerNode => triggerNode.parentNode }
            style={{ width: '100%' }}
            placeholder="Please select"
          >
            {children}
          </Select>
        </Form.Item>
        
        <Form.Item
          label="文章描述"
          name="describe"
          rules={[{ required: true, message: 'Please input your label!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="文章封面"
          // name="cover"
          rules={[{ required: true, message: 'Please input your cover!' }]}
          >
          <ImgCrop>
            <Upload
              name="cover"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="http://localhost:3030/api/article/uploadImg"
              // beforeUpload={beforeUpload}
              onPreview={onPreview}
              onChange={handleChange}
            >
              {
                imageUrl ?
                (<img src={imageUrl} alt="avatar" style={{ width: '100%' }} />)
                :
                (uploadButton)
              }
            </Upload>
          </ImgCrop>
        </Form.Item>

        <Form.Item
            label="文章正文"
            name="comment"
            rules={[{ required: true, message: 'Please input your comment!' }]}
          >
          <EditorTxt></EditorTxt>
        </Form.Item>

        <ArticleButton>sublimt</ArticleButton>

      </Form>
      
    </div>
  )
      
  function onSubmit(data) {
    const { comment } = data;
    const formData = Object.assign(data, {comment: comment? comment.toHTML() : comment });
    onFinish(formData);
  }

  function finishFailed(err) {
    onFinishFailed(err)
  }

  function beforeUpload(file, fileList) {
    console.log('file', file);
    console.log('fileList', fileList);
    var windowURL = window.URL || window.webkitURL;
    const dataURL = windowURL.createObjectURL(file);

    setImageUrl(dataURL)
    return false
  }

  

  async function onPreview(file) {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  
}
export default EditorContent;