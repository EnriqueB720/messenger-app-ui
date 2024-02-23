import * as React from 'react';

import _ from 'lodash';

import { Box } from '..';

const BackgroundImage: React.FC = () => {
    return (
        <Box
        backgroundImage={`url(./images/backgroundImage.png)`}
        backgroundPosition={'center'}
        backgroundSize="45%"
        backgroundRepeat={'repeat'}
        h={'100%'}
        opacity={0.06}
        position={'absolute'}
        top={'0'}
        left={'0'}
        w={'100%'}
      />
    );
}

export default React.memo(BackgroundImage, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});