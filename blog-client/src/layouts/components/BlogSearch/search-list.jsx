import React from 'react';
import { eq, isEmpty } from 'lodash';

import SerachItem from './search-item'

import style from './search-list.less'

const SearchList = props => {

  const  { children, defaultValue, onChange, value } = props
  
  return (
    <ul className={style['search-list-container']}>
      {
        !isEmpty(children) ? React.Children.map(children, child => {
          return React.cloneElement(child, {
            onChange: onChange,
            isActive: eq(defaultValue, child.props.value)
          });
        }) : 
        value && <li className="search-list-noraml">没有找到哦！！！</li>
      }
    </ul>
  )

}

SearchList.Option = SerachItem;

export default SearchList;