import * as React from 'react';

import _ from 'lodash';

import { MessageInfoProps } from '@types';

const MessageInfo: React.FC<MessageInfoProps> = ({
    message
}) => {

  return (
    <>

    </>
  );
}

export default React.memo(MessageInfo, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});