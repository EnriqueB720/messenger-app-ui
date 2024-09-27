import * as React from 'react';

import _ from 'lodash';

import { Box as CKBox } from '@chakra-ui/react';

import { BoxProps } from '@types';

const Box: React.FC<BoxProps> = ({
  text,
  children,
  alignItems,
 ...props
}) => {

  return (
    <CKBox
      {...props}
      alignItems = {props.display == 'flex' ? alignItems : undefined}
    >
      {text ? text : children}
    </CKBox>
  );
}

export default React.memo(Box, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});