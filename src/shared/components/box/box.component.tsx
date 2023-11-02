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
  as
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
    >
       {text}
    </CKBox>
  );
}

export default React.memo(Box, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});