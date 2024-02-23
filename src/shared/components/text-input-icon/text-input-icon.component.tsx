import * as React from 'react';

import _ from 'lodash';

import { Box, Flex, IconButton, Input } from '@components';
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { TextInputIconProps } from '@types';
import { color } from 'framer-motion';


const TextInputIcon: React.FC<TextInputIconProps> = ({
  leftIconType,
  rightIconType,
  inputPlaceholder,
  inputPadding = '10%',
  inputText,
  inputBackgroundColor,
  onLeftIconClick,
  onRightIconClick,
  onInputChange,
  onKeyDown
}) => {

  return (
    <Flex>
      <InputGroup>
        <InputLeftElement>
          <IconButton
            icon={leftIconType}
            size={'md'}
            colorScheme={'inherit'}
            fontSize={'xl'}
            onClick={onLeftIconClick} />
        </InputLeftElement>
        <Input
          placeholder={inputPlaceholder}
          variant={'filled'}
          style={{
            paddingLeft: inputPadding,
            backgroundColor: inputBackgroundColor,
            color: 'white'
          }}
          value={inputText}
          onChange={onInputChange}
          onKeyDown={onKeyDown} />
      </InputGroup>
      <Box>
        <IconButton
          icon={rightIconType}
          size={'md'}
          colorScheme={'inherit'}
          fontSize={'xl'}
          onClick={onRightIconClick} />
      </Box>
    </Flex>
  );
}

export default React.memo(TextInputIcon, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});