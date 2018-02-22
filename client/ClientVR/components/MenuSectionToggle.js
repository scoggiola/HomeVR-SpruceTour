import React, { Component } from 'react';

import MenuToggle from './MenuToggle';

const MenuSectionToggle = (props) => {

  return (
    <div className='menu-section menu-section-toggle'>
      <h4 className='menu-header'>{props.header}</h4>
      {props.header === 'bedroom 5' &&
        <MenuToggle
          header={props.header}
          options={props.options}
          handleClick={props.handleClick}
          optionValue={props.bedroom5On}
        />
      }
      {props.header === 'fireplace' &&
        <MenuToggle
          header={props.header}
          options={props.options}
          handleClick={props.handleClick}
          optionValue={props.fireplaceOn}
        />
      }
      {props.header === 'nook' &&
        <MenuToggle
          header={props.header}
          options={props.options}
          handleClick={props.handleClick}
          optionValue={props.nookOn}
        />
      }
      {props.header === 'rail' &&
        <MenuToggle
          header={props.header}
          options={props.options}
          handleClick={props.handleClick}
          optionValue={props.railOn}
        />
      }
    </div>
  );
}

export default MenuSectionToggle;
