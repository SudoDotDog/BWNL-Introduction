/**
 * @author WMXPY
 * @namespace Style
 * @description Intro
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

const IntroWithProgressStyleBase: JSSStyle = {

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
        pointerEvents: 'none',
    },
    ready: {
        opacity: 0,
    },
    intro: {
        display: 'grid',
        gridTemplateAreas: `
            "icon header"
            "icon progress"
            "icon body"
        `,
        gridTemplateRows: `1fr auto 1fr`,
        gridTemplateColumns: `auto 1fr`,
        rowGap: '2px',
    },
    icon: {
        gridArea: 'icon',
        alignSelf: 'center',
    },
    progress: {
        gridArea: 'progress',
        marginTop: '2px',
        height: '3px',
    },
    header: {
        gridArea: 'header',
        alignSelf: 'end',
        lineHeight: '1em',
        fontWeight: 'bold',
        transitionProperty: 'all',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-out',
    },
    body: {
        gridArea: 'body',
        alignSelf: 'start',
        lineHeight: '1em',
        fontWeight: 'bold',
        transitionProperty: 'all',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-out',
    },
};

export const IntroWithProgressStyle: StyleManager = StyleManager.create(IntroWithProgressStyleBase, 'Intro-With-Progress').setPrefix('BWNL-Intro-');
