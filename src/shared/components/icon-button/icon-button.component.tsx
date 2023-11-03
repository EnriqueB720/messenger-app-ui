import * as React from 'react';

import _ from 'lodash';

import { IconButton as CKIconButton } from '@chakra-ui/react';

import { IconButtonProps } from '@types';
import { WarningTwoIcon } from '@chakra-ui/icons';

const IconButton: React.FC<IconButtonProps> = ({
  style,
  isRound,
  colorScheme,
  variant,
  ariaLabel='',
  fontSize,
  icon,
  size
}) => {

  return (
    <CKIconButton
      style={style}
      variant={variant}
      size={size}
      isRound={isRound}
      fontSize={fontSize}
      colorScheme={colorScheme}
      icon={icon ? <WarningTwoIcon/> : <WarningTwoIcon/>}
      aria-label={ariaLabel}
      />
  );
}


export default React.memo(IconButton, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
  });