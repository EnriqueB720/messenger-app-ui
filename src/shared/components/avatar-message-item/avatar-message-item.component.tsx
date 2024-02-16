import * as React from 'react';

import _ from 'lodash';

import { AvatarMessageItemProps } from '@types';
import { AvatarItem, Text } from "@components";

const AvatarMessageItem: React.FC<AvatarMessageItemProps> = ({
    value,
    ...props
}) => {

    const formatDate = (date: Date): string => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });

        return `${day} ${month}`;
    };

    const message = value instanceof Date ? formatDate(value) : value;
    
    return (
        <AvatarItem {...props}>
            <Text color="#8696a0">
                {message}
            </Text>
        </AvatarItem>
    );
}

export default React.memo(AvatarMessageItem, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});