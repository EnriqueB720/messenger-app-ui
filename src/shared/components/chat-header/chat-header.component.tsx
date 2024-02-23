import * as React from 'react';

import _ from 'lodash';
import { AvatarIconItem, Box, IconButton } from '@components';
import { ChatHeaderProps } from '@types';


const ChatHeader: React.FC<ChatHeaderProps> = ({
  height,
  data
}) => {

  return (
    <Box h={`${height}px`} borderLeftColor="#2f3b43"
    borderLeftWidth="2px" zIndex={'1000'}>
      <AvatarIconItem
        bg={'#202c33'}
        avatarSize={'sm'}
        title={data.title}
        subtitle={data.subtitle}
        icons={
          <>
            <IconButton
              style={{
                marginTop: '4px'
              }}
              icon={'search'}
              colorScheme={'inherit'}
              size={'lg'}
              fontSize={'xl'}
              onClick={() => { }}
            />
            <IconButton
              style={{
                marginTop: '4px'
              }}
              icon={'dots'}
              colorScheme={'inherit'}
              size={'lg'}
              fontSize={'xl'}
              onClick={() => { }}
            />
          </>
        } />

    </Box>

  );
}

export default React.memo(ChatHeader, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});