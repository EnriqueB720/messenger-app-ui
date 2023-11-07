import * as React from 'react';

import _ from 'lodash';

import { Box as CKBox } from '@chakra-ui/react';

import { BoxProps } from '@types';

const Box: React.FC<BoxProps> = ({
  style,
  h,
  w,
  borderRadius,
  bg,
  color,
  text,
  as,
  children,
  display,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  alignItems,
  border,
  borderColor
}) => {

  return (
    <CKBox
      style={style}
      h={h}
      w={w}
      borderRadius={borderRadius}
      bg={bg}
      color={color}
      as={as}
      display={display}
      m={margin}
      mt={marginTop}
      mb={marginBottom}
      mr={marginRight}
      ml={marginLeft}
      alignItems={display == 'flex' ? alignItems : undefined}
      border={border}
      borderColor={borderColor}
    >
      {text ? text : children}
    </CKBox>
  );
}

export default React.memo(Box, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});