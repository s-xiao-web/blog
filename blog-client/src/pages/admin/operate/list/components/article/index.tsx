import React, { useState, useEffect  } from 'react';
import ImgCrop  from 'antd-img-crop'
import { Form, Input, Select, Upload, Modal } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import EditorForm from './components';
import EditorTxt from './components/ArticleText'

import style from './index.less';

const { ArticleButton } = EditorForm;
const { Option } = Select;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const EditorContent = ({
  initFormData,
  onFinish,
  onFinishFailed,
  labelData,
}) => {

  const layout = { labelCol: { span: 3 } };
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewTitle, setPreviewTitle] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  useEffect(() => {
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
            {
              labelData.map((item, index) => (
                <Option key={item.id} value={item.id + ''}>{item.content}</Option>) )
            }
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
          >
          <ImgCrop>
            <Upload
              name="cover"
              listType="picture-card"
              className="avatar-uploader"
              action="http://localhost:3030/api/upload/image"
              fileList={fileList}
              beforeUpload={beforeUpload}
              onPreview={onPreview}
              onChange={handleChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
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

      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  )
      
  function onSubmit(data) {
    const { comment } = data;
    const formData = Object.assign(
      data,
      {comment: comment? comment.toHTML() : comment },
      {cover: imageUrl}
    );
    onFinish(formData);
  }

  function finishFailed(err) {
    onFinishFailed(err)
  }

  function beforeUpload(file, fileList) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  async function onPreview(file) {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  }

  function handleChange({ file, fileList }) {
    switch(file.status) {
      case 'done':
        setImageUrl( file.response.data.path );
        setLoading( false );
        break;
      case 'removed':
        setImageUrl('');
        setLoading(false);
        break;
      case 'uploading':
        setLoading(true);
        break;
      default :
        setLoading(false);
    }
    setFileList( fileList );
  }

  function handleCancel() {
    setPreviewVisible(false);
  }
}
export default EditorContent;