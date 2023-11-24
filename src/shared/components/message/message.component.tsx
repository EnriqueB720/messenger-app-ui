import * as React from 'react';

import _ from 'lodash';
import { MessageProps } from '@types';
import { Flex, Box, Text, Stack } from '@components';


const Message: React.FC<MessageProps> = ({
    username,
    isUserMessage,
    messageContent,
    messageTime
}) => {

    function formatTimestamp(timestamp: Date) {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

        return formattedTime;
    }

    return (
        <Flex
            direction="row"
            justifyContent={isUserMessage ? 'flex-end' : 'flex-start'}
            mb="3"
        >
            <Box
                marginTop={1}
                w="fit-content"
                maxW='50%'
                padding={1}
                borderRadius="md"
                bg={isUserMessage ? 'blue.400' : 'gray.200'}
                color={isUserMessage ? 'white' : 'black'}
            >
                {
                    username ?
                        <Text fontSize="xs" color="gray.500">
                            {username}
                        </Text>
                        :
                        null
                }
                <Stack direction='row'>
                    <Text fontSize="md">{messageContent}</Text>
                    <Text marginTop={'5px'} fontSize="xs" textAlign={isUserMessage ? 'right' : 'left'}>
                        {formatTimestamp(messageTime)}
                    </Text>
                </Stack>

            </Box>
        </Flex>
    );
}

export default React.memo(Message, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});