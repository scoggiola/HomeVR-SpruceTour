import React from 'react';

import MenuSection from './MenuSection';
import MenuSectionToggle from './MenuSectionToggle';

// Gets props via the DomOverlayModule and uses those to render content
const MenuOverlay = (props) => {
  console.log(props);
  const menu = props.menuData;
  const listMenu = menu.map((menuSection, index) => {
    return menuSection.sectionType === 'list' ? (
      <MenuSection header={ menuSection.sectionHeader }
                   options={ menuSection.sectionOptions }
                   handleClick={ props.handleClick }
                   key={index} />
    ) : (
      <MenuSectionToggle header={ menuSection.sectionHeader }
                         options={ menuSection.sectionOptions }
                         handleClick={ props.handleClick }
                         bedroom5On={ props.bedroom5On }
                         fireplaceOn={ props.fireplaceOn }
                         nookOn={ props.nookOn }
                         railOn={ props.railOn } 
                         key={index} />
    );
  });

  return (
    <div className='container'>
      <div className='content'>
        <div className='close' onClick={ props.onClose } />
        <div className='menu'>
          {listMenu}
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
