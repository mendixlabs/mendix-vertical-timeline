import { Component, ReactNode, createElement } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { hot } from "react-hot-loader/root";
import { TimelineContainerContainerProps } from "../typings/TimelineContainerProps";

import "./ui/TimelineContainer.scss";

class TimelineContainer extends Component<TimelineContainerContainerProps> {
    render(): ReactNode {
        const { animate, dataSource, elements, layout } = this.props;

        if (dataSource.status !== "available") {
            return null;
        }

        return (
            <VerticalTimeline
                className={this.props.class}
                animate={animate}
                layout={layout === "twoColumn" ? "2-columns" : "1-column"}
            >
                {dataSource.items?.map(i => elements(i))}
            </VerticalTimeline>
        );
    }
}

export default hot(TimelineContainer);
