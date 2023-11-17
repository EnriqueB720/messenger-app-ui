import * as React from 'react';

import _ from 'lodash';

import { IconButton, Input } from '@components';
import { InputGroup, InputLeftElement } from '@chakra-ui/react';


const SearchBar: React.FC = () => {

    const handleClick = () => {
        alert('Executing search')
    }
    return (
        <InputGroup>
            <InputLeftElement>
                <IconButton
                    icon={'search'}
                    size={'md'}
                    color={'black'}
                    colorScheme={'inherit'}
                    fontSize={'xl'}
                    onClick={() => {handleClick()}} />
            </InputLeftElement>
            <Input
                placeholder='Search in chats'
                variant={'filled'} 
                style={{
                    paddingLeft: '10%'
                }}/>
        </InputGroup>
    );
}

export default React.memo(SearchBar, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});