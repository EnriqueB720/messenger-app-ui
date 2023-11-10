import * as React from 'react';

import _ from 'lodash';

import { Text as CKText } from '@chakra-ui/react';

import { TextProps } from '@types';

const Text: React.FC<TextProps> = ({
  color,
  as,
  fontSize,
  noOfLines,
  children,
  textAlign
}) => {

  return (
    <CKText
      color={color}
      as={as}
      fontSize={fontSize}
      noOfLines={noOfLines}
      textAlign={textAlign}
    >
      {children}
    </CKText>
  );
}

export default React.memo(Text, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});