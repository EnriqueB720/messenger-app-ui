import * as React from 'react';

import _ from 'lodash';

import { IconButton as CKIconButton } from '@chakra-ui/react';

import { IconButtonProps } from '@types';
import { Icon } from '../..';

const IconButton: React.FC<IconButtonProps> = ({
  style,
  isRound,
  colorScheme,
  variant,
  ariaLabel='',
  fontSize,
  icon,
  size,
  color,
  onClick
}) => {

  return (
    <CKIconButton
      style={style}
      variant={variant}
      size={size}
      isRound={isRound}
      fontSize={fontSize}
      colorScheme={colorScheme}
      icon={<Icon name={icon}/>}
      aria-label={ariaLabel}
      color={color}
      onClick={onClick}
      />
  );
}


export default React.memo(IconButton, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
  });