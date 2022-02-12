import React from 'react';
import {Container} from '../../Container';
import {ErrorMessage} from './/components/ErrorMessage';

export const StoryDashboard = () => {
    const flag = true;

    if (flag)
        return (
            <>
                <ErrorMessage />
            </>
        );

    return (
        <>
            <Container>
                <div>kek story</div>
            </Container>
        </>
    );
};
