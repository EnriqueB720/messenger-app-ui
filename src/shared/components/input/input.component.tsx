import * as React from 'react';

import _ from 'lodash';

import { Input as CKInput } from '@chakra-ui/react';

import { InputProps } from '@types';

const Input: React.FC<InputProps> = ({
  style,
  height,
  width,
  variant,
  placeholder,
  size,
  value
}) => {

  return (
    <CKInput
      style={style}
      height={height}
      width={width}
      variant={variant}
      placeholder={placeholder}
      size={size}
      value={value}
    />
  );
}

export default React.memo(Input, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
  });