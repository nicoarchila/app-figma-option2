/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DataListOverridesProps = {
    DataList?: PrimitiveOverrideProps<FlexProps>;
    "Group 184"?: PrimitiveOverrideProps<FlexProps>;
    Badge387012521?: PrimitiveOverrideProps<BadgeProps>;
    Badge387012526?: PrimitiveOverrideProps<BadgeProps>;
    Badge387012529?: PrimitiveOverrideProps<BadgeProps>;
    "Frame 437"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type DataListProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DataListOverridesProps | undefined | null;
}>;
export default function DataList(props: DataListProps): React.ReactElement;
