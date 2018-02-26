import React from 'react';

const MenuOption = (props) => {
  const details = {
    header: props.header,
    option: props.option
  }
  if (typeof props.option === 'string') {
    details.option = props.option;
  } else if (typeof props.option === 'object') {
    details.option = props.option.value;
    details.rotation = props.option.rotation;
  }

  return (
    <li className='menu-list-option' onClick={() => props.handleClick(details) }>{props.option}</li>
  );
};

export default MenuOption;
