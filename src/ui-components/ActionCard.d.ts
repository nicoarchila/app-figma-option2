/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type ActionCardOverridesProps = {
    ActionCard?: PrimitiveOverrideProps<FlexProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    "Group 187"?: PrimitiveOverrideProps<FlexProps>;
    Cuentas?: PrimitiveOverrideProps<TextProps>;
    MyIcon?: MyIconProps;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "Cuenta de ahorro"?: PrimitiveOverrideProps<TextProps>;
    Producto38733041?: PrimitiveOverrideProps<FlexProps>;
    "N\u00FAmero de producto"?: PrimitiveOverrideProps<TextProps>;
    "*******6194"?: PrimitiveOverrideProps<TextProps>;
    Saldo?: PrimitiveOverrideProps<FlexProps>;
    "Saldo actual"?: PrimitiveOverrideProps<TextProps>;
    "$785.902,00"?: PrimitiveOverrideProps<TextProps>;
    Producto38733416?: PrimitiveOverrideProps<FlexProps>;
    "Fecha l\u00EDmite de pago"?: PrimitiveOverrideProps<TextProps>;
    "04/06/2023"?: PrimitiveOverrideProps<TextProps>;
    "Group 188"?: PrimitiveOverrideProps<FlexProps>;
    Button38733125?: PrimitiveOverrideProps<ButtonProps>;
    Button29766759?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ActionCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    tittle?: String;
    productName?: String;
    numberProduct?: String;
    CurrentActual?: String;
    btnClassName?: String;
    actionDetails?: (event: SyntheticEvent) => void;
    islot?: Boolean;
    dateLimit?: String;
    actionTransfer?: (event: SyntheticEvent) => void;
    actionTranfer?: (event: SyntheticEvent) => void;
} & {
    prod_type?: "active" | "passive";
} & {
    overrides?: ActionCardOverridesProps | undefined | null;
}>;
export default function ActionCard(props: ActionCardProps): React.ReactElement;
