import * as React from 'react';

import _ from 'lodash';

import { MenuButton as CKMenuButton } from '@chakra-ui/react';

import { MenuButtonProps } from '@types';

const MenuButton: React.FC<MenuButtonProps> = ({
    children,
    ...props
}) => {

  return (
    <CKMenuButton
    {...props}
    >
      {children}
    </CKMenuButton>
  );
}

export default React.memo(MenuButton, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});