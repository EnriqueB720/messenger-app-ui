import * as React from 'react';

import _ from 'lodash';

import { Avatar, Box, Flex, IconButton } from '@components';
import { SidebarHeaderProps } from '@types';


const SideBarHeader: React.FC<SidebarHeaderProps> = ({ data }) => {

    const handleClick = React.useCallback((userId: any) => {
        alert('user-info clicked: ' + userId)
    }, []);

    // console.log('SideBarHeader')
    
    return (
        <Box bg={'#202c33'} padding={1}>
            <Flex justifyContent={'space-between'}>
                <Box margin={1} marginRight={4}>
                    <Avatar
                        style={{ cursor: 'pointer' }}
                        name={data?.userName}
                        onClick={() => handleClick(data.userId)} />
                </Box>
                <Box>
                    <IconButton
                        style={{
                            marginTop: '4px'
                        }}
                        icon={'dots'}
                        size={'lg'}
                        colorScheme={'inherit'}
                        fontSize={'xl'} 
                        onClick={() => {}}/>
                </Box>
            </Flex>
        </Box>
    );
}

export default React.memo(SideBarHeader, (prevProps, nextProps) => {
    // if(prevProps.data != undefined || nextProps.data != undefined){
    //     return true;
    // }
    return _.isEqual(prevProps, nextProps);
});