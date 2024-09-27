import * as React from 'react';

import _ from 'lodash';

import { Image as CKImage } from '@chakra-ui/react';

import { ImageProps } from '@types';

const Image: React.FC<ImageProps> = ({
  style,
  h,
  w,
  borderRadius,
  alt,
  boxSize,
  src
}) => {

  return (
    <CKImage
      style={style}
      h={h}
      w={w}
      borderRadius={borderRadius}
      boxSize={boxSize}
      src={src}
    />
  );
}

export default React.memo(Image, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});