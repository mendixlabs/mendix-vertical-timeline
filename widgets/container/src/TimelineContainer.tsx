import { Component, ReactNode, createElement } from "react";
import { VerticalTimeline } from "rc-vertical-timeline";
import { hot } from "react-hot-loader/root";
import { TimelineContainerContainerProps } from "../typings/TimelineContainerProps";

import "./ui/TimelineContainer.scss";
// import "rc-vertical-timeline/build/index.css";

class TimelineContainer extends Component<TimelineContainerContainerProps> {
    render(): ReactNode {
        const { animate, dataSource, elements, layout } = this.props;

        if (dataSource.status === "unavailable") {
            return null;
        }

        if (dataSource.items && dataSource.items.length === 0) {
            return null;
        }

        return (
            <VerticalTimeline
                className={this.props.class}
                loading={dataSource.status === "loading"}
                animate={animate}
                layout={layout === "twoColumn" ? "2-columns" : "1-column"}
            >
                {dataSource.items?.map(i => elements(i))}
            </VerticalTimeline>
        );
    }
}

export default hot(TimelineContainer);
