import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Background} from '../../components/Background';
import {FooterCustom} from '../../components/FooterCustom';
import {HeaderCustom} from '../../components/HeaderCustom';
import {Container} from '../../components/Container';
import {PoetryPage} from '../../components/PoetryPage';

const queryClient = new QueryClient();

const Poetry = ({id}) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Background />
            <HeaderCustom />
            <main>
                <Container>
                    <PoetryPage id={id} />
                </Container>
            </main>
            <FooterCustom />
        </QueryClientProvider>
    );
};

export default Poetry;
