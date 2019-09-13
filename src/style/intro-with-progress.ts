/**
 * @author WMXPY
 * @namespace Style
 * @description Intro
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";
import { IntroStyleBase } from "./intro";

export const IntroWithProgressStyleBase: JSSStyle = {

    ...IntroStyleBase,
    progress: {
        gridArea: 'progress',
        marginTop: '2px',
        height: '3px',
    },
};

export const IntroWithProgressStyle: StyleManager = StyleManager.create(IntroWithProgressStyleBase, 'Intro-With-Progress').setPrefix('BWNL-Intro-');
