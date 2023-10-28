import * as React from 'react';

import _ from 'lodash';

import { Avatar as CKAvatar, AvatarBadge } from '@chakra-ui/react';

import { AvatarProps } from '@types';

const Avatar: React.FC<AvatarProps> = ({
  style,
  avatartBadge = false,
  badgeColor = "yellow",
  bg,
  name,
  size,
  src
}) => {


  return (
    <CKAvatar
      style={style}
      bg={bg}
      name={name}
      size={size}
      src={src}
    >
    {avatartBadge ? <AvatarBadge boxSize='1.25em' bg={badgeColor} /> : ''}
    </CKAvatar>
  );
}

export default React.memo(Avatar, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});