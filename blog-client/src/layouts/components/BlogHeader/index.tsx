import React from 'react';
import { map } from 'lodash';

import { config } from '@/config';

import style from './index.less';

export const BlogHeader:React.FC = props => {

  const { menu } = config;

  const renderMenuItem = map(menu, item => {
    return (
      <li className={style['menu-item-wrapper']} key={item.name}>
        <span className={style['menu-item']}>{item.name}</span>
      </li>
    )
  });

  return (
    <div className={style['header-container']}>
      <div className={style['logo-wrapper']}>
        <span>Artiely</span>
        <span>blog</span>
      </div>
      <ul className={style['menu-wrapper']}>
        { renderMenuItem }
      </ul>
    </div>
  )

}