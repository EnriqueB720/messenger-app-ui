import * as React from 'react';

import _ from 'lodash';

import { Icon as CKIcon } from '@chakra-ui/react';

import { IconName, IconProps } from '@types';

import { AddIcon } from '@chakra-ui/icons';

import { AiOutlineSend } from 'react-icons/ai';


const IconDictionary: {
  [K in IconName]: any
} = {
  send: AiOutlineSend,
  add: AddIcon
}


const Icon: React.FC<IconProps> = ({
  name
}) => {

  const Component = IconDictionary[name];

  return (
    <Component />
  );
}


export default React.memo(Icon, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});