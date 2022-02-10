import React from 'react';
import {RecoilRoot} from 'recoil';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Background} from '../components/Background';
import {PoetryDashboard} from '../components/Dashboards';
import {FooterCustom} from '../components/FooterCustom';
import {HeaderCustom} from '../components/HeaderCustom';

const queryClient = new QueryClient();

const PoetryList = () => {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <Background />
                <HeaderCustom />
                <main>
                    <PoetryDashboard />
                </main>
                <FooterCustom />
            </QueryClientProvider>
        </RecoilRoot>
    );
};

export default PoetryList;
