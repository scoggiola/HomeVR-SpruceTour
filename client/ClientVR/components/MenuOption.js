import React from 'react';

const MenuOption = (props) => {
  const details = {
    header: props.header,
    option: props.option
  }

  if (typeof props.option === 'string') {
    details.option = props.option;
    return (
      <li className='menu-list-option' onClick={() => props.handleClick(details) }>{props.option}</li>
    );
  } else if (typeof props.option === 'object') {
    details.option = props.option;
    return (
      <li className='menu-list-option' onClick={() => props.handleClick(details) }>{props.option.value}</li>
    );
  }
};

export default MenuOption;
