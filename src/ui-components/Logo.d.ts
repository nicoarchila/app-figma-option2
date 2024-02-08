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
    Logo_Soi?: PrimitiveOverrideProps<ViewProps>;
    Vector48691067?: PrimitiveOverrideProps<IconProps>;
    Vector48691068?: PrimitiveOverrideProps<IconProps>;
    Vector48691069?: PrimitiveOverrideProps<IconProps>;
    Vector48691070?: PrimitiveOverrideProps<IconProps>;
    Vector48691071?: PrimitiveOverrideProps<IconProps>;
    Vector48691072?: PrimitiveOverrideProps<IconProps>;
    Vector48691073?: PrimitiveOverrideProps<IconProps>;
    Vector48691074?: PrimitiveOverrideProps<IconProps>;
    Vector48691075?: PrimitiveOverrideProps<IconProps>;
    Vector48691076?: PrimitiveOverrideProps<IconProps>;
    Vector48691077?: PrimitiveOverrideProps<IconProps>;
    Vector48691078?: PrimitiveOverrideProps<IconProps>;
    Vector48691079?: PrimitiveOverrideProps<IconProps>;
    Vector48691080?: PrimitiveOverrideProps<IconProps>;
    Vector48691081?: PrimitiveOverrideProps<IconProps>;
    Vector48691082?: PrimitiveOverrideProps<IconProps>;
    Vector48691083?: PrimitiveOverrideProps<IconProps>;
    Vector48691084?: PrimitiveOverrideProps<IconProps>;
    Vector48691085?: PrimitiveOverrideProps<IconProps>;
    Vector48691086?: PrimitiveOverrideProps<IconProps>;
    Vector48691087?: PrimitiveOverrideProps<IconProps>;
    Vector48691088?: PrimitiveOverrideProps<IconProps>;
    Vector48691089?: PrimitiveOverrideProps<IconProps>;
    Vector48691090?: PrimitiveOverrideProps<IconProps>;
    Vector48691091?: PrimitiveOverrideProps<IconProps>;
    Vector48691092?: PrimitiveOverrideProps<IconProps>;
    Vector48691093?: PrimitiveOverrideProps<IconProps>;
    Vector48691094?: PrimitiveOverrideProps<IconProps>;
    Vector48691095?: PrimitiveOverrideProps<IconProps>;
    Vector48691096?: PrimitiveOverrideProps<IconProps>;
    Vector48691097?: PrimitiveOverrideProps<IconProps>;
    Vector48691098?: PrimitiveOverrideProps<IconProps>;
    Vector48691099?: PrimitiveOverrideProps<IconProps>;
    Vector48691100?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type LogoProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LogoOverridesProps | undefined | null;
}>;
export default function Logo(props: LogoProps): React.ReactElement;
