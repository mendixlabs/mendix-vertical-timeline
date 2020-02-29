import { Component, ReactNode, createElement } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { TimelineElementPreviewProps } from "../typings/TimelineElementProps";

// declare function require(name: string): string;

export class preview extends Component<TimelineElementPreviewProps> {
    render(): ReactNode {
        return <VerticalTimelineElement></VerticalTimelineElement>;
    }
}

export function getPreviewCss(): string {
    return "";
}
