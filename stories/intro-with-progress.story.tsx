/**
 * @author WMXPY
 * @namespace Intro
 * @description Intro With Progress
 * @override Story
 */

import * as React from 'react';
import { IntroGifLogo, IntroWithProgress } from "../src";

// tslint:disable-next-line: no-default-export
export default {
    title: 'Intro With Progress Bar',
};

export const IntroWithProgressBar = () => {

    return (<IntroWithProgress
        zIndex={2000}
        color="red"
        progress={15}
        logo={<IntroGifLogo src="https://media0.giphy.com/media/l3vR16pONsV8cKkWk/giphy.gif" />}
        header="Header Header Header"
        body="Body Body Body"
        bodyStyle={{
            color: "red",
            fontWeight: 'bold',
        }}
        extra={<div>Something Extra</div>}
    >
        Content
    </IntroWithProgress>);
};
