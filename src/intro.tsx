/**
 * @author WMXPY
 * @namespace Intro
 * @description Intro
 */

import * as React from "react";
import { IntroLogoComponentProps } from "./declare";
import { IntroStyle } from "./style/intro";

export type IntroProps = {

    readonly className?: string;
    readonly style?: React.CSSProperties;
    readonly zIndex?: number;

    readonly logo: React.ReactElement<IntroLogoComponentProps>;
    readonly header: string;
    readonly body: string;
};

export type IntroStates = {

    readonly ready: boolean;
};

export class Intro extends React.Component<IntroProps, IntroStates> {

    public readonly state: IntroStates = {

        ready: false,
    };

    private readonly _introStyle = IntroStyle.use();

    public constructor(props: IntroProps) {

        super(props);
    }

    public render() {

        const logo: React.ReactElement = React.cloneElement(this.props.logo, {
            forwarding: false,
            reversing: false,
        } as IntroLogoComponentProps);

        return (<React.Fragment>
            <div
                className={this._introStyle.cover}
                style={{
                    zIndex: this.props.zIndex || 30,
                }}
            >
                <div className={this._introStyle.intro}>
                    <div className={this._introStyle.icon}>
                        {logo}
                    </div>
                    <div className={this._introStyle.header}>
                        {this.props.header}
                    </div>
                    <div className={this._introStyle.body}>
                        {this.props.body}
                    </div>
                </div>
            </div>
            <div
                className={this.props.className}
                style={{
                    ...this.props.style,
                    visibility: this.state.ready ? 'visible' : 'hidden',
                }}
            >
                {this.props.children}
            </div>
        </React.Fragment>);
    }
}
