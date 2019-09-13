/**
 * @author WMXPY
 * @namespace Intro
 * @description Intro
 */

import * as React from "react";
import { IntroStyle } from "./style/intro";

export type IntroProps = {

};

export type IntroStates = {

};

export class Intro extends React.Component<IntroProps, IntroStates> {

    public readonly state: IntroStates = {

    };

    private readonly _introStyle = IntroStyle.use();

    public constructor(props: IntroProps) {

        super(props);
    }

    public render() {

        return (<div
        >
            123
        </div>);
    }
}
