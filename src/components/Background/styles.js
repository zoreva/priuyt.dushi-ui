import styled from 'styled-components';

export const BackgroundStyled = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .background_wrapper {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgb(138, 92, 46);
        background: linear-gradient(
            180deg,
            rgba(138, 92, 46, 0.6839110644257703) 0%,
            rgba(154, 109, 52, 0.3925945378151261) 17%,
            rgba(190, 146, 64, 0.12088585434173671) 73%
        );
    }
`;
