import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { map } from 'lodash';

import SearchList from './search-list';

const { Option } = SearchList;

require('./index.less')

export const BlogSearch: React.FC = props => {

  const { onClose, isSearch, esc, onChange, data } = props;

  const inp = useRef();
  const [value, setValue]= useState('我是文本框 内容');

  const open = classnames({
    'search': true,
    'search--open': isSearch
  })

  useEffect(() => {
    const ele = inp.current;
    isSearch ? ele.focus() : ele.blur();
  }, [isSearch])

  useEffect(() => onEsc())

  const renderOptions = map(data, (item) => {
    const {id, label} = item
    return <Option value={id} key={id}>{label}</Option>
  })

  return (
    <div 
      className={
        classnames('search-container',
        {'search-container-checked': isSearch}
      )}
    >
      <div className={open}>
        <button
          id="btn-search-close"
          className="btn btn--search-close"
          aria-label="Close search form"
          onClick={handleClose}
          >
        </button>
        <form className="search__form" action="">
          <input 
            className="search__input"
            name="search"
            type="search"
            value={value}
            onChange={(e)=> onInpChange(e)}
            placeholder="Search"
            ref={inp}
          />
          <SearchList onChange={changeSelect} value={value}>
            {renderOptions}
          </SearchList>
          <span className="search__info">Hit enter to search or ESC to close</span>
        </form>
      </div>
    </div>
  )
  
  function onEsc() {
    if(!esc) return;
    document.addEventListener('keydown', ({keyCode}) => {
      if ( keyCode === 27 ) onClose();
    })
  }

  function changeSelect({label}) {
    setValue(label);
    handleClose();
  }

  function onInpChange(e) {
    const val = e.target.value;
    setValue(val);
    onChange(val);
  }

  function handleClose() {
    onClose();
    setValue('')
  }
}