/**
 * @author WMXPY
 * @namespace Style
 * @description Intro
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { IntroStyleBase } from "./intro";

export const IntroWithProgressStyleBase: Styles = {

    ...IntroStyleBase,
    intro: {
        display: 'grid',
        gridTemplateAreas: `
            "icon header"
            "icon progress"
            "icon body"
            "extra extra"
        `,
        gridTemplateRows: `1fr auto 1fr`,
        gridTemplateColumns: `auto 1fr`,
        rowGap: '3px',
    },
    progress: {
        gridArea: 'progress',
        marginTop: '2px',
        height: '3px',
        transitionProperty: 'all',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-out',
    },
};

export const IntroWithProgressStyle: StyleManager = StyleManager.create(IntroWithProgressStyleBase, 'Intro-With-Progress').setPrefix('BWNL-Intro-');
