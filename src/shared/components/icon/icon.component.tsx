import * as React from 'react';

import _ from 'lodash';

import { Icon as CKIcon } from '@chakra-ui/react';

import { IconProps } from '@types';

const Icon: React.FC<IconProps> = ({
  as,
  boxSize
}) => {

  return (
    <CKIcon
    as={as}
    boxSize={boxSize}
      />
  );
}


export default React.memo(Icon, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
  });