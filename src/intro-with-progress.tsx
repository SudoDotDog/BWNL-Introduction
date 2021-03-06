/* eslint-disable @typescript-eslint/no-magic-numbers */
/**
 * @author WMXPY
 * @namespace Intro
 * @description Intro With Progress
 */

import { assertIfTrue, mergeClasses } from "@sudoo/jss";
import * as React from "react";
import { IntroLogoComponentProps, IntroProps, IntroStates } from "./declare";
import { IntroWithProgressStyle } from "./style/intro-with-progress";

export type IntroWithProgressProps = {

    readonly progress: number;
    readonly color: string;

    readonly progressStyle?: React.CSSProperties;
    readonly progressClassName?: string;
} & IntroProps;

export class IntroWithProgress extends React.Component<IntroWithProgressProps, IntroStates> {

    public readonly state: IntroStates = {

        playing: false,
        ready: false,
        covering: true,
    };

    private readonly _introStyle = IntroWithProgressStyle.use();

    public constructor(props: IntroWithProgressProps) {

        super(props);
    }

    public componentDidMount() {

        const delay: number = this.props.delay || 100;
        const duration: number = this.props.duration || 2000;
        const phase: number = this.props.phase || 300;

        setTimeout(() => this.setState({
            playing: true,
        }, () => setTimeout(() => this.setState({
            playing: false,
            ready: true,
        }, () => setTimeout(() => this.setState({
            covering: false,
        }), phase)), duration)), delay);
    }

    public render() {

        return (<React.Fragment>
            {this._renderCover()}
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

    private _renderCover() {

        if (!this.state.covering) {
            return null;
        }

        const size: number = this.props.size || 100;
        const gapSize: number = Math.floor(size / 5);

        const logo: React.ReactElement = React.cloneElement(this.props.logo, {
            forwarding: this.state.playing,
            reversing: this.state.ready,
        } as IntroLogoComponentProps);

        return (<div
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
                    style={this._getOpacityStyle({
                        height: `${size}px`,
                    })}
                >
                    {logo}
                </div>
                <div
                    className={mergeClasses(
                        this._introStyle.progress,
                        this.props.progressClassName,
                    )}
                    style={this._getOpacityStyle(this.props.progressStyle)}
                >
                    <div style={{
                        backgroundColor: this.props.color,
                        height: '100%',
                        width: `${Math.min(100, this.props.progress)}%`,
                    }} />
                </div>
                <div
                    className={mergeClasses(
                        this._introStyle.header,
                        this.props.headerClassName,
                    )}
                    style={this._getHeaderStyle()}
                >
                    {this.props.header}
                </div>
                <div
                    className={mergeClasses(
                        this._introStyle.body,
                        this.props.bodyClassName,
                    )}
                    style={this._getBodyStyle()}
                >
                    {this.props.body}
                </div>
                <div
                    className={mergeClasses(
                        this._introStyle.extra,
                        this.props.extraClassName,
                    )}
                    style={this._getOpacityStyle(this.props.extraStyle)}
                >
                    {this.props.extra}
                </div>
            </div>
        </div>);
    }

    private _getOpacityStyle(merge?: React.CSSProperties): React.CSSProperties {

        if (this.state.playing) {
            return {
                ...merge,
                opacity: 1,
            };
        }

        return {
            ...merge,
            opacity: 0,
        };
    }

    private _getHeaderStyle(): React.CSSProperties {

        const size: number = this.props.size || 100;
        const fontSize: number = Math.floor(size / 3.6);
        const marginSize: number = Math.floor(size / 2.5);

        if (this.state.playing) {
            return {
                ...this.props.headerStyle,
                fontSize: `${fontSize}px`,
                marginLeft: 0,
                opacity: 1,
            };
        }

        return {
            ...this.props.headerStyle,
            fontSize: `${fontSize}px`,
            marginLeft: `-${marginSize}px`,
            opacity: 0,
        };
    }

    private _getBodyStyle(): React.CSSProperties {

        const size: number = this.props.size || 100;
        const fontSize: number = Math.floor(size / 3.6);
        const marginSize: number = Math.floor(size / 2.5);

        if (this.state.playing) {
            return {
                ...this.props.bodyStyle,
                fontSize: `${fontSize}px`,
                marginLeft: 0,
                opacity: 1,
            };
        }

        return {
            ...this.props.bodyStyle,
            fontSize: `${fontSize}px`,
            marginLeft: `-${marginSize}px`,
            opacity: 0,
        };
    }
}
// tslint:enable: no-magic-numbers
