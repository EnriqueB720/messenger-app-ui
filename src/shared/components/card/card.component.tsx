import * as React from 'react';

import _ from 'lodash';

import { CardProps } from '@types';
import { Avatar, Box, Stack, Text, Flex } from '..';

const Card: React.FC<CardProps> = ({
    style,
    bg = 'lightgray',
    messageDate,
    subtitle,
    title,
    avatarImage,
    icons
}) => {

    const formatDate = (inputDate: string): string => {
        const date = new Date(inputDate);

        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });

        return `${day} ${month}`;
    };

    return (
        <Box bg={bg} style={style} padding={2} h={'72px'}>
            <Flex justifyContent={'space-between'}>
                <Flex justifyContent={'center'} w={''}>
                    <Box margin={1} marginRight={4}>
                        <Avatar src={avatarImage ? avatarImage : undefined} name={title ? title : undefined} />
                    </Box>
                    <Stack direction={'column'}>
                        <Box>
                            <Text fontSize="l" as={'b'}>
                                {title}
                            </Text>
                        </Box>
                        <Box w='200px'>
                            <Text fontSize='sm' color="gray.600" overflow="hidden" textOverflow="ellipsis">
                                {subtitle}
                            </Text>
                        </Box>
                    </Stack>
                </Flex>
                <Box>
                    {
                        messageDate ?
                            <Text color="gray.600">
                                {formatDate(messageDate)}
                            </Text>
                            : <Box>
                                {icons}
                            </Box>
                    }
                </Box>
            </Flex>

        </Box>
    );
}

export default React.memo(Card, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});