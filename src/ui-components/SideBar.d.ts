/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SideBarOverridesProps = {
    SideBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32139493355"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32139493356"?: PrimitiveOverrideProps<FlexProps>;
    Section?: PrimitiveOverrideProps<FlexProps>;
    link387011157?: PrimitiveOverrideProps<FlexProps>;
    icon387011158?: PrimitiveOverrideProps<FlexProps>;
    MyIcon387011159?: MyIconProps;
    label387011160?: PrimitiveOverrideProps<TextProps>;
    link387011161?: PrimitiveOverrideProps<FlexProps>;
    icon387011162?: PrimitiveOverrideProps<FlexProps>;
    MyIcon387011163?: MyIconProps;
    label387011164?: PrimitiveOverrideProps<TextProps>;
    link387011165?: PrimitiveOverrideProps<FlexProps>;
    icon387011166?: PrimitiveOverrideProps<FlexProps>;
    MyIcon387011167?: MyIconProps;
    label387011168?: PrimitiveOverrideProps<TextProps>;
    link39493365?: PrimitiveOverrideProps<FlexProps>;
    icon39493366?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39493367?: MyIconProps;
    label39493368?: PrimitiveOverrideProps<TextProps>;
    link39493369?: PrimitiveOverrideProps<FlexProps>;
    icon39493370?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39493371?: MyIconProps;
    label39493372?: PrimitiveOverrideProps<TextProps>;
    link39493373?: PrimitiveOverrideProps<FlexProps>;
    icon39493374?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39493375?: MyIconProps;
    label39493376?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideBarOverridesProps | undefined | null;
}>;
export default function SideBar(props: SideBarProps): React.ReactElement;
