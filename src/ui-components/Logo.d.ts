/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type LogoOverridesProps = {
    Logo?: PrimitiveOverrideProps<ViewProps>;
    LogoP?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector447749842?: PrimitiveOverrideProps<IconProps>;
    Vector447749843?: PrimitiveOverrideProps<IconProps>;
    Vector447749844?: PrimitiveOverrideProps<IconProps>;
    Vector447749845?: PrimitiveOverrideProps<IconProps>;
    Vector447749846?: PrimitiveOverrideProps<IconProps>;
    Vector447749847?: PrimitiveOverrideProps<IconProps>;
    Vector447749848?: PrimitiveOverrideProps<IconProps>;
    Vector447749849?: PrimitiveOverrideProps<IconProps>;
    Vector447749850?: PrimitiveOverrideProps<IconProps>;
    Vector447749851?: PrimitiveOverrideProps<IconProps>;
    Vector447749852?: PrimitiveOverrideProps<IconProps>;
    Vector447749853?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type LogoProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LogoOverridesProps | undefined | null;
}>;
export default function Logo(props: LogoProps): React.ReactElement;
