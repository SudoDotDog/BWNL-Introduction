/**
 * @author WMXPY
 * @namespace Style
 * @description Intro
 */

import { StyleManager, Styles } from "@sudoo/jss";

export const IntroStyleBase: Styles = {

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
            "icon body"
            "extra extra"
        `,
        gridTemplateRows: `1fr 1fr`,
        gridTemplateColumns: `auto 1fr`,
        rowGap: '3px',
    },
    icon: {
        gridArea: 'icon',
        alignSelf: 'center',
        transitionProperty: 'all',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-out',
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
    extra: {
        gridArea: 'extra',
        transitionProperty: 'all',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-out',
    },
};

export const IntroStyle: StyleManager = StyleManager.create(IntroStyleBase, 'Intro').setPrefix('BWNL-Intro-');
