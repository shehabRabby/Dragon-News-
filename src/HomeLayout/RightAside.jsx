import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzon from './Qzon';

const RightAside = () => {
    return (
        <div className='space-y-9'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzon></Qzon>
        </div>
    );
};

export default RightAside;