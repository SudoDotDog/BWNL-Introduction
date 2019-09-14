/**
 * @author WMXPY
 * @namespace Intro
 * @description Intro
 */

import { assertIfTrue, mergeClasses } from "@sudoo/jss";
import * as React from "react";
import { IntroLogoComponentProps, IntroProps, IntroStates } from "./declare";
import { IntroStyle } from "./style/intro";

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
                    style={{
                        height: `${size}px`,
                    }}
                >
                    {logo}
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
            </div>
        </div>);
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
