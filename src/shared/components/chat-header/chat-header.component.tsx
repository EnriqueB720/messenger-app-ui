import * as React from 'react';

import _ from 'lodash';
import { AvatarIconItem, Box, IconButton } from '@components';
import { ChatHeaderProps } from '@types';


const ChatHeader: React.FC<ChatHeaderProps> = ({
  height,
  data
}) => {

  return (
    <Box h={`${height}px`}>
      <AvatarIconItem
        title={data.title}
        subtitle={data.subtitle}
        icons={
          <>
            <IconButton
              style={{
                marginTop: '4px'
              }}
              color={'black'}
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
              color={'black'}
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