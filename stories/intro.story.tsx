/**
 * @author WMXPY
 * @namespace Intro
 * @description Intro
 * @override Story
 */

import * as React from 'react';
import { Intro, IntroGifLogo } from "../src";

export default {
    title: 'Intro',
};

export const Introduction = (): React.ReactNode => {

    return (<Intro
        zIndex={2000}
        logo={<IntroGifLogo src="https://media0.giphy.com/media/l3vR16pONsV8cKkWk/giphy.gif" />}
        header="Header Header Header"
        body="Body Body Body"
        headerStyle={{
            color: "red",
            fontWeight: 'bold',
        }}
        extra={<div>Something Extra</div>}
    >
        Content
    </Intro>);
};
