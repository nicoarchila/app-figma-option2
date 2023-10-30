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
export declare type SideBarMobileOverridesProps = {
    SideBarMobile?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32140914220"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32140914221"?: PrimitiveOverrideProps<FlexProps>;
    Section?: PrimitiveOverrideProps<FlexProps>;
    link40914223?: PrimitiveOverrideProps<FlexProps>;
    icon40914224?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40914225?: MyIconProps;
    label40914226?: PrimitiveOverrideProps<TextProps>;
    link40914227?: PrimitiveOverrideProps<FlexProps>;
    icon40914228?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40914229?: MyIconProps;
    label40914230?: PrimitiveOverrideProps<TextProps>;
    link40914231?: PrimitiveOverrideProps<FlexProps>;
    icon40914232?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40914233?: MyIconProps;
    label40914234?: PrimitiveOverrideProps<TextProps>;
    link40914235?: PrimitiveOverrideProps<FlexProps>;
    icon40914236?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40914237?: MyIconProps;
    label40914238?: PrimitiveOverrideProps<TextProps>;
    link40914239?: PrimitiveOverrideProps<FlexProps>;
    icon40914240?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40914241?: MyIconProps;
    label40914242?: PrimitiveOverrideProps<TextProps>;
    link40914243?: PrimitiveOverrideProps<FlexProps>;
    icon40914244?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40914245?: MyIconProps;
    label40914246?: PrimitiveOverrideProps<TextProps>;
    link40914253?: PrimitiveOverrideProps<FlexProps>;
    icon40914254?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40914255?: MyIconProps;
    label40914256?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideBarMobileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideBarMobileOverridesProps | undefined | null;
}>;
export default function SideBarMobile(props: SideBarMobileProps): React.ReactElement;
