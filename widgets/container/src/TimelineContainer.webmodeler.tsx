import { Component, ReactNode, createElement } from "react";
import { VerticalTimeline } from "rc-vertical-timeline";
import { TimelineContainerPreviewProps } from "../typings/TimelineContainerProps";

declare function require(name: string): string;

export class preview extends Component<TimelineContainerPreviewProps> {
    render(): ReactNode {
        const { animate, children } = this.props;

        return (
            <VerticalTimeline className={this.props.class} animate={animate}>
                {children}
            </VerticalTimeline>
        );
    }
}

export function getPreviewCss(): string {
    return require("./ui/TimelineContainer.scss");
}
