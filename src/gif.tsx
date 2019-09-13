/**
 * @author WMXPY
 * @namespace Intro
 * @description Gif Logo
 */

import * as React from "react";
import { IntroLogoComponentProps } from "./declare";

export type IntroGifLogoPropsBase = {

    readonly src: string;
};

export type IntroGifLogoProps = IntroGifLogoPropsBase & IntroLogoComponentProps;

export class IntroGifLogoBase extends React.Component<IntroGifLogoProps> {

    public constructor(props: IntroGifLogoProps) {

        super(props);
    }

    public render() {

        return (<div
        >
            <img src={this.props.src} />
        </div>);
    }
}

export const IntroGifLogo: React.ComponentType<IntroGifLogoPropsBase> = IntroGifLogoBase as any;
