import React from 'react';
import useIntersect from './IntersectionObserver';
import styled from 'styled-components';



const StyledWrapper = styled.div`
    height: 80vh;
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-end;
    z-index: 10;

    ${({ theme }) => theme.media.desktop} {
        .logo {
            background-position: ${({ ratio }) => `center -${ratio < 57 ? (ratio * 481) : (56 * 481)}px`};
    }
`
let active = null;

const IntersectBox = props => {

    const [refBanner, entryBanner] = useIntersect({
        threshold: [0, 0.25, 0.5, 0.75, 1.0]
    });

    const [refActive, entryActive] = useIntersect({
        threshold: 0.5
    });

    let flag = true;
    if (entryActive.intersectionRatio > 0.5 && flag) {
        flag = !flag;
        active = "is-active";
    }

    let scrollTop = 0,
        frame = 0,
        ratio = entryBanner.intersectionRatio;


    scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if (ratio > 0 && frame < 57) {
        frame = parseInt(scrollTop / 10);
    }

    let animationWrapper = null;

    switch (props.initial) {
        case ('addClass'):
            animationWrapper = <div ref={refActive} className={active}>
                {props.children}
            </div>;
            break;
        case ('scroll'):
            animationWrapper = <StyledWrapper ref={refBanner} ratio={frame}>
                {props.children}
            </StyledWrapper>;
            break;
        default:
            animationWrapper = <div ref={refActive} className={active}>
                {props.children}
            </div>;
    }

    return (
        <>
            {animationWrapper}
        </>

    );
};

export default IntersectBox;