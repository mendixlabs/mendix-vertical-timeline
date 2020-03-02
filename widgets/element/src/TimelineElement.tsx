import { Component, ReactNode, createElement, ReactElement } from "react";
import { VerticalTimelineElement } from "rc-vertical-timeline";
import { ValueStatus } from "mendix";
import { Icon } from "mendix/components/web/Icon";
import { hot } from "react-hot-loader/root";
import { TimelineElementContainerProps } from "../typings/TimelineElementProps";

class TimelineElement extends Component<TimelineElementContainerProps> {
    onClick = this.clickHandler.bind(this);

    render(): ReactNode {
        const { style, content, icon, elementPosition, dateExpr } = this.props;

        const iconElement = icon && icon.value ? <Icon icon={icon.value} /> : null;
        const position = elementPosition === "auto" ? "" : elementPosition === "left" ? "left" : "right";
        const date = dateExpr && dateExpr.status === ValueStatus.Available ? dateExpr.value : "";

        return (
            <VerticalTimelineElement
                style={style}
                className={this.props.class}
                iconOnClick={this.onClick}
                icon={iconElement as ReactElement}
                position={position}
                date={date}
            >
                <div className={"vertical-timeline-element-container"}>{content}</div>
            </VerticalTimelineElement>
        );
    }

    clickHandler(): void {
        if (
            this.props.iconClickAction &&
            this.props.iconClickAction.canExecute &&
            !this.props.iconClickAction.isExecuting
        ) {
            this.props.iconClickAction.execute();
        }
    }
}

export default hot(TimelineElement);
