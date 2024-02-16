import * as React from 'react';

import _ from 'lodash';

import { DropdownIconButtonProps } from '@types';
import { Menu, MenuButton, Icon, MenuItem, Box, MenuList } from '..';

const DropdownIconButton: React.FC<DropdownIconButtonProps> = ({
  icon,
  options,
  boxColor
}) => {

  return (
    <Box
      style={{
        cursor: "pointer",
      }}
      bg={boxColor}
    >
      <Menu>
        <MenuButton
          as={"button"}
          variant={"outline"}
          title={"More options"}
        >
          <Icon name={icon} />
        </MenuButton>
        <MenuList backgroundColor={'#202c33'}>
          {options.map(({text, onClick }, index) => (
            <MenuItem
              key={index}
              backgroundColor={'#202c33'}
              color={"white"}
              onClick={onClick}
            >
              {text}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default React.memo(DropdownIconButton, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});