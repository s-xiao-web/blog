import React from 'react';
import { connect } from 'dva';
import { get } from 'lodash';

import BaseLayout from './BaseLayout';
import AdminLayout from './AdminLayout';

const SecurityLayout = props => {

  const { location } = props;

  return location.pathname === '/admin' ? 
    (<AdminLayout>{ props.children }</AdminLayout>)
    :
    (<BaseLayout {...props}>{ props.children }</BaseLayout>)

}

export default connect(state => ({isLogin: get(state, 'system.token')}))(SecurityLayout);
