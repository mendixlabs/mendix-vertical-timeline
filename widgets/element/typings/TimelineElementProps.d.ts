/**
 * This file was generated from TimelineElement.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { ActionPreview } from "@mendix/pluggable-widgets-typing-generator/dist/typings";
import { ActionValue, DynamicValue, WebIcon } from "mendix";
import { ReactNode } from "react";

interface CommonProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export type ElementPositionEnum = "auto" | "left" | "right";

export interface TimelineElementContainerProps extends CommonProps {
    content: ReactNode;
    dateExpr?: DynamicValue<string>;
    elementPosition: ElementPositionEnum;
    icon?: DynamicValue<WebIcon>;
    iconClassName?: DynamicValue<string>;
    iconClickAction?: ActionValue;
}

export interface TimelineElementPreviewProps {
    class: string;
    style: string;
    styleObject: CSSProperties;
    content: ReactNode;
    dateExpr?: string;
    elementPosition: ElementPositionEnum;
    icon?: WebIcon;
    iconClassName?: string;
    iconClickAction: ActionPreview;
}

export interface VisibilityMap {
    content: boolean;
    dateExpr: boolean;
    elementPosition: boolean;
    icon: boolean;
    iconClassName: boolean;
    iconClickAction: boolean;
}
