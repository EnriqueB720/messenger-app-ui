import * as React from 'react';

import _ from 'lodash';

import { Box, Flex, IconButton, Input } from '@components';
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { TextInputIconProps } from '@types';


const TextInputIcon: React.FC<TextInputIconProps> = ({
    leftInconType,
    rightInconType,
    inputPlaceholder,
    inputPadding = '10%',
    onLeftIconClick,
    onRightIconClick,
    OnInputChange
}) => {

    return (
        <Flex>
            <InputGroup>
                <InputLeftElement>
                    <IconButton
                        icon={leftInconType}
                        size={'md'}
                        color={'black'}
                        colorScheme={'inherit'}
                        fontSize={'xl'}
                        onClick={onLeftIconClick} />
                </InputLeftElement>
                <Input
                    placeholder={inputPlaceholder}
                    variant={'filled'}
                    style={{
                        paddingLeft: inputPadding
                    }}
                    onChange={OnInputChange} />
            </InputGroup>
            <Box>
                <IconButton
                    icon={rightInconType}
                    size={'md'}
                    color={'black'}
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