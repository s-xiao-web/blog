import React from 'react';

export default {
  UserName: {
    props: {
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
    props: {
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
