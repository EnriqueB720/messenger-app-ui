import * as React from 'react';

import _ from 'lodash';
import { ChatInfoActionListProps } from '@types';
import { Button, IconButton, Box, Icon } from '../..';


const ChatInfoActionList: React.FC<ChatInfoActionListProps> = ({
  options
}) => {

  return (
    <>
      {
        options?.map(({ text, onClick, iconType }, index) => (
          <Button bg={'inherit'} w={'full'} onClick={onClick} key={index}>
            <Box display={'flex'} color={'#f15c6d'} alignItems={'center'}>
              <Icon
                name={iconType}
              />
              <Box marginBottom={0.5} marginLeft = {1}>
                {text}
              </Box>
            </Box>
          </Button>
        ))
      }
    </>
  );
}

export default React.memo(ChatInfoActionList, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});