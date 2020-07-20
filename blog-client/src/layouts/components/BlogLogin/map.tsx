import React from 'react';

interface DefaultFace {
  [index: string]:object
}


const defaultData: DefaultFace = {
  UserName: {
    params: {
      type: 'text',
      placeholder: 'username',
    },
    rules: [
      {
        required: true,
        message: 'Please enter username!',
      },
    ],
  },
  PassWord: {
    params: {
      type: 'password',
      placeholder: 'password',
    },
    rules: [
      {
        required: true,
        message: 'Please enter password!',
      },
    ],
  },
};

export default defaultData;