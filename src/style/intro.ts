/**
 * @author WMXPY
 * @namespace Style
 * @description Intro
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

const IntroStyleBase: JSSStyle = {

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
    },
};

export const IntroStyle: StyleManager = StyleManager.create(IntroStyleBase, 'Intro').setPrefix('BWNL-Intro-');
