import * as React from 'react';

import _ from 'lodash';

import { useUserQuery } from "@/shared/generated/graphql-schema";
import { Avatar, Box, Flex, IconButton } from '@components';


const SideBarHeader: React.FC = () => {

    const user = useUserQuery({
        variables: {
            where: {
                username: "test"
            }
        }
    });

    const handleClick = (userId: any) => {
        alert('user-info clicked: ' + userId)
    }
    return (
        <Box bg='blue.400' padding={1}>
            <Flex justifyContent={'space-between'}>
                <Box margin={1} marginRight={4}>
                    <Avatar
                        style={{ cursor: 'pointer' }}
                        name={user.data?.user.fullName}
                        onClick={() => handleClick(user.data?.user.id)} />
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
    return _.isEqual(prevProps, nextProps);
});