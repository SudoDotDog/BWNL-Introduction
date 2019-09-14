/**
 * @author WMXPY
 * @namespace Intro
 * @description Declare
 */

import * as React from "react";

export type IntroLogoComponentProps = {

    readonly forwarding: boolean;
    readonly reversing: boolean;
};

export type IntroProps = {

    readonly className?: string;
    readonly style?: React.CSSProperties;

    readonly headerClassName?: string;
    readonly headerStyle?: React.CSSProperties;

    readonly bodyClassName?: string;
    readonly bodyStyle?: React.CSSProperties;

    readonly extra?: React.ReactNode;

    readonly zIndex?: number;
    readonly size?: number;

    readonly delay?: number;
    readonly duration?: number;
    readonly phase?: number;

    readonly logo: React.ReactElement<IntroLogoComponentProps>;
    readonly header: string;
    readonly body: string;
};

export type IntroStates = {

    readonly playing: boolean;
    readonly ready: boolean;
    readonly covering: boolean;
};

