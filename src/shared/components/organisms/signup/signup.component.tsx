import * as React from 'react';

import _ from 'lodash';

const Signup: React.FC = () => {
        return (
            <></>
        )
}


export default React.memo(Signup, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});