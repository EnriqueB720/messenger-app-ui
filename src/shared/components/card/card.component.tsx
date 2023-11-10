import * as React from 'react';

import _ from 'lodash';

import { CardProps } from '@types';
import { Avatar, Box, Stack, Text } from '..';

const Card: React.FC<CardProps> = ({
    style,
    bg = 'lightgray',
    messageDate,
    subtitle,
    title,
    avatarImage,
    icons
}) => {


    return (
        <Box bg={bg} style={style} textAlign='left' display={'flex'} padding={2}>
            <Box margin={1}>
                <Avatar src={avatarImage ? avatarImage : undefined} name={title ? title : undefined} />
            </Box>
            <Box>
                <Stack direction='column'>
                        {
                            messageDate ?
                                <Stack direction='row' display={'flex'}>
                                    <Text as={'b'}>{title}</Text>
                                    <Text>{messageDate}</Text>
                                </Stack>
                                : <Text>{title}</Text>
                        }
                    <Text>
                        {subtitle}
                    </Text>
                </Stack>
            </Box>
            {icons ? <Box display={'inline-block'}>{icons}</Box> : null}
        </Box>
    );
}

export default React.memo(Card, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});