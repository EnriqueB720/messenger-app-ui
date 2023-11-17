import * as React from 'react';

import _ from 'lodash';

import { Box, Flex, IconButton, Input, SearchBar } from '@components';
import { InputGroup, InputLeftElement } from '@chakra-ui/react';


const ChatSearchBar: React.FC = () => {

    const handleClick = () => {
        alert('filter chats');
    }
    return (
        <Box maxW='30%' bg='lightgray' style={{
            borderBottomColor: '1px solid black'
        }} padding={1}>
            <Flex>
                    <SearchBar/>
                <Box>
                    <IconButton
                        icon={'filter'}
                        size={'md'}
                        color={'black'}
                        colorScheme={'inherit'}
                        fontSize={'xl'}
                        onClick={() => {handleClick()}} />
                </Box>
            </Flex>
        </Box>
    );
}

export default React.memo(ChatSearchBar, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});