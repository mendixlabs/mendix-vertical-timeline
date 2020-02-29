/**
 * This file was generated from TimelineContainer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { ListValue, ObjectItem } from "mendix";
import { ReactNode } from "react";

interface CommonProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export type LayoutEnum = "twoColumn" | "singleColumn";

export interface TimelineContainerContainerProps extends CommonProps {
    dataSource: ListValue;
    elements: (item: ObjectItem) => ReactNode;
    animate: boolean;
    layout: LayoutEnum;
}

export interface TimelineContainerPreviewProps {
    class: string;
    style: string;
    styleObject: CSSProperties;
    dataSource: ListValue;
    elements: (item: ObjectItem) => ReactNode;
    animate: boolean;
    layout: LayoutEnum;
}

export interface VisibilityMap {
    dataSource: boolean;
    elements: boolean;
    animate: boolean;
    layout: boolean;
}
