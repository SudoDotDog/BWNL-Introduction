/**
 * @author WMXPY
 * @namespace Style
 * @description Intro
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

export const IntroStyleBase: JSSStyle = {

    cover: {
        position: 'fixed',
        display: 'flex',
        height: '100vh',
        width: '100vw',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        transitionProperty: 'all',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
        opacity: 1,
        // pointerEvents: 'none',
    },
    ready: {
        opacity: 0,
    },
    intro: {
        display: 'grid',
        gridTemplateAreas: `
            "icon header"
            "icon body"
        `,
        gridTemplateRows: `1fr 1fr`,
        gridTemplateColumns: `auto 1fr`,
        rowGap: '2px',
    },
    icon: {
        gridArea: 'icon',
        alignSelf: 'center',
    },
    header: {
        gridArea: 'header',
        alignSelf: 'end',
        lineHeight: '1em',
        transitionProperty: 'all',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-out',
    },
    body: {
        gridArea: 'body',
        alignSelf: 'start',
        lineHeight: '1em',
        transitionProperty: 'all',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-out',
    },
};

export const IntroStyle: StyleManager = StyleManager.create(IntroStyleBase, 'Intro').setPrefix('BWNL-Intro-');
