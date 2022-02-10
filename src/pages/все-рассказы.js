import React from 'react';
import {Background} from '../components/Background';
import {StoryDashboard} from '../components/Dashboards';
import {FooterCustom} from '../components/FooterCustom';
import {HeaderCustom} from '../components/HeaderCustom';

const StoryList = () => {
    return (
        <>
            <Background />
            <HeaderCustom />
            <main>
                <StoryDashboard />
            </main>
            <FooterCustom />
        </>
    );
};

export default StoryList;
