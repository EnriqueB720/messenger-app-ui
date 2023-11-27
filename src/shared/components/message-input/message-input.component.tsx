import * as React from 'react';

import _ from 'lodash';
import { Box, TextInputIcon } from '@components';
import { useState } from 'react';
import { useChatsQuery, useCreateDirectMessageMutation } from '@/shared/generated/graphql-schema';
import { useSearchParams } from 'next/navigation';

const MessageInput: React.FC = () => {

    const [message, setMessage] = useState('')
    const handleClick = (event: any) => setMessage(event.target.value)
    
    const searchParams = useSearchParams();
    let chatId = Number.parseInt(searchParams.get('chatId')!);

    const chat = useChatsQuery({
        fetchPolicy: 'cache-and-network',
        variables: {
            where: {
                id: chatId
            }
        }
    });

    const [createDirectMessage] = useCreateDirectMessageMutation()
    const sendMessage = async () => {
        createDirectMessage({
            variables:{
                data:{
                    sender:{
                        connect:{
                            id: 4
                        }
                    },
                    contact:{
                        userId: 4,
                        contactUserId: chat.data?.chats[0].participants![1].user?.id
                    },
                    text: message
                }
            }
        })

      };


    return (
        <Box bg='lightgray' padding={2}>
            <TextInputIcon
                leftInconType={'emoji'}
                rightInconType={'send'}
                onLeftIconClick={() => { alert('emoji clicked') }}
                onRightIconClick={() => { sendMessage() }}
                inputPlaceholder={'Type a message...'} 
                inputPadding={'4%'}
                OnInputChange={() => handleClick}/>
        </Box>

    );
}

export default React.memo(MessageInput, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});