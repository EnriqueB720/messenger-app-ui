import * as React from 'react';

import _ from 'lodash';
import { Box, IconButton } from '@components';
import { RightSideBarHeaderProps } from '@types';



const RightSideBarHeader: React.FC<RightSideBarHeaderProps> = ({
  height,
  onCloseFunction,
  text
}) => {


  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        bg={'#202c33'}
        color={'white'}
        borderLeftColor="#2f3b43"
        borderLeftWidth="2px"
        h={`${height}px`}>
        <IconButton
          icon={'close'}
          colorScheme={'inherit'}
          size={'lg'}
          fontSize={'xl'}
          onClick={onCloseFunction} aria-label={''}/>
        <Box>
          {text}
        </Box>
      </Box>
    </Box>

  );
}

export default React.memo(RightSideBarHeader, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});