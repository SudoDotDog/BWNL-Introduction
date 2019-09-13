/**
 * @author WMXPY
 * @namespace Intro
 * @description Intro
 */

import { assertIfTrue, mergeClasses } from "@sudoo/jss";
import * as React from "react";
import { IntroLogoComponentProps } from "./declare";
import { IntroStyle } from "./style/intro";

export type IntroProps = {

    readonly className?: string;
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

export class Intro extends React.Component<IntroProps, IntroStates> {

    public readonly state: IntroStates = {

        playing: false,
        ready: false,
        covering: true,
    };

    private readonly _introStyle = IntroStyle.use();

    public constructor(props: IntroProps) {

        super(props);
    }

    public componentDidMount() {

        setTimeout(() => this.setState({
            playing: true,
        }, () => setTimeout(() => this.setState({
            playing: false,
            ready: true,
        }, () => setTimeout(() => this.setState({
            covering: false,
        }), 300)), 2000)), 100);
    }

    public render() {

        const size: number = this.props.size || 100;
        const gapSize: number = Math.floor(size / 5);

        const logo: React.ReactElement = React.cloneElement(this.props.logo, {
            forwarding: false,
            reversing: false,
        } as IntroLogoComponentProps);

        return (<React.Fragment>
            {this.state.covering && <div
                className={mergeClasses(
                    this._introStyle.cover,
                    assertIfTrue(this.state.ready, this._introStyle.ready),
                )}
                style={{
                    zIndex: this.props.zIndex || 30,
                }}
            >
                <div
                    className={this._introStyle.intro}
                    style={{
                        columnGap: `${gapSize}px`,
                    }}
                >
                    <div
                        className={this._introStyle.icon}
                        style={{
                            height: `${size}px`,
                        }}
                    >
                        {logo}
                    </div>
                    <div
                        className={this._introStyle.progress}
                    />
                    <div
                        className={this._introStyle.header}
                        style={this._getTextStyle()}
                    >
                        {this.props.header}
                    </div>
                    <div
                        className={this._introStyle.body}
                        style={this._getTextStyle()}
                    >
                        {this.props.body}
                    </div>
                </div>
            </div>}
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

    private _getTextStyle(): React.CSSProperties {

        const size: number = this.props.size || 100;
        const fontSize: number = Math.floor(size / 3.6);
        const marginSize: number = Math.floor(size / 2.5);

        if (this.state.playing) {
            return {
                fontSize: `${fontSize}px`,
                opacity: 1,
            };
        }

        return {
            fontSize: `${fontSize}px`,
            marginLeft: `-${marginSize}px`,
            opacity: 0,
        };
    }
}
