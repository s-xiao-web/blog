import React from 'react';
import classnames from 'classnames';
import { Select } from 'antd';

const { Option } = Select;

require('./index.less')

export const BlogSearch: React.FC = props => {

  const open = classnames({
    'search': true,
    'search--open': props.isSearch
  })

  return (
    <div className={ open }>
      <button
        id="btn-search-close"
        className="btn btn--search-close"
        aria-label="Close search form">
      </button>
      <form className="search__form" action="">
        <input className="search__input" name="search" type="search" placeholder="Search"  />
        <span className="search__info">Hit enter to search or ESC to close</span>
      </form>
		</div >
  )

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}
}