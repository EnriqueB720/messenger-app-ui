import * as React from 'react';

import _ from 'lodash';

import { AvatarItemProps } from '@types';
import { Avatar, Box, Stack, Text, Flex } from '../..';

const AvatarItem: React.FC<AvatarItemProps> = ({
    style,
    bg = 'lightgray',
    children,
    subtitle,
    title,
    avatarImage,
    titleWidth,
    avatarSize,
    subtitleWidth = '200px',
    onClick
}) => {
    return (
        <Box bg={bg} padding={2} h={'inherit'} >
            <Flex justifyContent={'space-between'}>
                <Flex justifyContent={'center'} w={''} onClick={onClick} style={style}>
                    <Box margin={1} marginRight={4}>
                        <Avatar size={avatarSize ? avatarSize : undefined} src={avatarImage ? avatarImage : undefined} name={title && !avatarImage ? title : undefined} />
                    </Box>
                    <Stack direction={'column'}>
                        <Box>
                            <Text fontSize={titleWidth ? titleWidth : "l"} color={'#e9edef'}>
                                {title}
                            </Text>
                        </Box>
                        <Box w={subtitleWidth ? subtitleWidth : '300px'}>
                            <Text fontSize='sm' color="#8696a0" overflow="hidden" textOverflow="ellipsis">
                                {subtitle}
                            </Text>
                        </Box>
                    </Stack>
                </Flex>
                <Box>{children}</Box>
            </Flex>
        </Box>
    );
}

export default React.memo(AvatarItem, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});