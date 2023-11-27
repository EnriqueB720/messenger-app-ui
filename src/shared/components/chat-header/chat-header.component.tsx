import * as React from 'react';

import _ from 'lodash';
import { AvatarIconItem, Box, IconButton } from '@components';
import { useSearchParams } from 'next/navigation';
import { useChatsQuery } from '@/shared/generated/graphql-schema';


const ChatHeader: React.FC<{height: number}> = ({
    height
}) => {



    const searchParams = useSearchParams();
    let chatId = Number.parseInt(searchParams.get('chatId')!);

    // if(!chatId){
    //     return (
    //         <Box h={`${height}px`}>
    //             <AvatarIconItem title={'No chat selected'}/>
    //         </Box>
    //     );
    // }

    const chat = useChatsQuery({
        fetchPolicy: 'cache-and-network',
        variables: {
            where: {
                id: chatId
            }
        }
    });

    return (
        <Box h={`${height}px`}>
            <AvatarIconItem 
            title={chat.data?.chats[0].name}
            subtitle={chat.data?.chats[0].isGroup ? chat.data?.chats[0].participants?.map(p =>  p.user?.fullName).join(',') : " "}
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