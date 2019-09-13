/**
 * @author WMXPY
 * @namespace Intro
 * @description Declare
 */

export type IntroLogoComponentProps = {

    readonly forwarding: boolean;
    readonly reversing: boolean;
};

export type IntroProps = {

    readonly className?: string;
    readonly color?: string;
    readonly style?: React.CSSProperties;
    readonly zIndex?: number;
    readonly size?: number;

    readonly logo: React.ReactElement<IntroLogoComponentProps>;
    readonly header: string;
    readonly body: string;
};

export type IntroStates = {

    readonly playing: boolean;
    readonly ready: boolean;
    readonly covering: boolean;
};

