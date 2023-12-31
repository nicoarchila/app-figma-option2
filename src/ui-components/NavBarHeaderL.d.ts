/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LogoProps } from "./Logo";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
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
export declare type NavBarHeaderLOverridesProps = {
    NavBarHeaderL?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    Logo?: LogoProps;
    "Mis productos"?: PrimitiveOverrideProps<TextProps>;
    "Mis ofertas"?: PrimitiveOverrideProps<TextProps>;
    "Mis datos"?: PrimitiveOverrideProps<TextProps>;
    "Ahorro e inversi\u00F3n"?: PrimitiveOverrideProps<TextProps>;
    "Extractos y certificados"?: PrimitiveOverrideProps<TextProps>;
    Seguridad?: PrimitiveOverrideProps<TextProps>;
    actions?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavBarHeaderLProps = React.PropsWithChildren<Partial<FlexProps> & {
    onExitClick?: (event: SyntheticEvent) => void;
    btnClassName?: String;
} & {
    overrides?: NavBarHeaderLOverridesProps | undefined | null;
}>;
export default function NavBarHeaderL(props: NavBarHeaderLProps): React.ReactElement;
