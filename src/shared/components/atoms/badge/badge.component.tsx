import * as React from 'react';

import _ from 'lodash';

import { Badge as CKBadge } from '@chakra-ui/react';

import { BadgeProps } from '@types';

const Badge: React.FC<BadgeProps> = ({
  fontSize,
  children,
  colorScheme,
  variant,
  bg,
  color
}) => {

  return (
    <CKBadge
      fontSize={fontSize}
      colorScheme={colorScheme}
      variant={variant}
      bg={bg}
      color={color}
    >
      {children}
    </CKBadge>
  );
}

export default React.memo(Badge, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});