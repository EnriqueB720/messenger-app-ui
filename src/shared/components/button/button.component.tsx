import * as React from 'react';

import _ from 'lodash';

import { Button as CKButton } from '@chakra-ui/react';

import { ButtonProps } from '@types';

// import { useTranslation } from '../../hooks';

const Button: React.FC<ButtonProps> = ({
  style,
  disabled,
  loading,
  text,
  color,
  uppercase,
  variant = 'solid',
  block = false,
  onClick,
  ...otherStyles
}) => {
//   const { t } = useTranslation();

  return (
    <CKButton
      style={style}
      disabled={disabled}
      variant={variant}
      width={block ? 'full' : undefined}
      onClick={onClick}
      isLoading={loading}
      color={color}
      {...otherStyles}
    >
      {text}
    </CKButton>
  );
}

export default React.memo(Button, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});