/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoProps } from "./Logo";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarHeaderNLOverridesProps = {
    NavBarHeaderNL?: PrimitiveOverrideProps<FlexProps>;
    Logo?: LogoProps;
    "Frame 32129767076"?: PrimitiveOverrideProps<FlexProps>;
    Beneficios?: PrimitiveOverrideProps<TextProps>;
    Productos?: PrimitiveOverrideProps<TextProps>;
    "Servicios internacionales"?: PrimitiveOverrideProps<TextProps>;
    Sucursales?: PrimitiveOverrideProps<TextProps>;
    Ayuda?: PrimitiveOverrideProps<TextProps>;
    "Frame 32129767081"?: PrimitiveOverrideProps<FlexProps>;
    Button38732712?: PrimitiveOverrideProps<ButtonProps>;
    Button38732840?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavBarHeaderNLProps = React.PropsWithChildren<Partial<FlexProps> & {
    btnClassName?: String;
} & {
    overrides?: NavBarHeaderNLOverridesProps | undefined | null;
}>;
export default function NavBarHeaderNL(props: NavBarHeaderNLProps): React.ReactElement;
