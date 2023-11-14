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
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  alignItems,
  border,
  borderColor,
  textAlign,
  float,
  position,
  top,
  right,
  bottom,
  left,
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
      p={padding}
      pt={paddingTop}
      pb={paddingBottom}
      pr={paddingRight}
      pl={paddingLeft}
      alignItems={display == 'flex' ? alignItems : undefined}
      border={border}
      borderColor={borderColor}
      textAlign={textAlign}
      float={float}
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    >
      {text ? text : children}
    </CKBox>
  );
}

export default React.memo(Box, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});