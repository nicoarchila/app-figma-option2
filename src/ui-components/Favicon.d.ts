/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FaviconOverridesProps = {
    Favicon?: PrimitiveOverrideProps<FlexProps>;
    favicon?: PrimitiveOverrideProps<FlexProps>;
    Vector40914078?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector40914080?: PrimitiveOverrideProps<IconProps>;
    Vector40914081?: PrimitiveOverrideProps<IconProps>;
    Vector40914082?: PrimitiveOverrideProps<IconProps>;
    Vector40914083?: PrimitiveOverrideProps<IconProps>;
    Vector40914084?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type FaviconProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FaviconOverridesProps | undefined | null;
}>;
export default function Favicon(props: FaviconProps): React.ReactElement;
