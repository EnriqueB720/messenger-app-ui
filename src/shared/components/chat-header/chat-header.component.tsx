import * as React from 'react';

import _ from 'lodash';
import { AvatarIconItem, Box, IconButton } from '@components';


const ChatHeader: React.FC<{height: number}> = ({
    height
}) => {

    return (
        <Box h={`${height}px`}>
            <AvatarIconItem 
            title={"Test chat title"}
            subtitle={"subtitle test"}
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
                        onClick={() => {}}
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
                        onClick={() => {}}
                    />
                </>
            } />

        </Box>

    );
}

export default React.memo(ChatHeader, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});