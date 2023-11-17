import * as React from 'react';

import _ from 'lodash';

import { AvatarIconItemProps } from '@types';
import { AvatarItem, Text } from "@components";

const AvatarIconItem: React.FC<AvatarIconItemProps> = ({
    icons,
    ...props
}) => {
  
    return (
        <AvatarItem {...props}>
                {icons}
        </AvatarItem>
    );
}

export default React.memo(AvatarIconItem, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});