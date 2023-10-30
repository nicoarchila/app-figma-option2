/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type ProductInformationOverridesProps = {
    ProductInformation?: PrimitiveOverrideProps<FlexProps>;
    "Group 194"?: PrimitiveOverrideProps<FlexProps>;
    "Cr\u00E9dito de libranza"?: PrimitiveOverrideProps<TextProps>;
    MyIcon?: MyIconProps;
    "Group 197"?: PrimitiveOverrideProps<FlexProps>;
    "N\u00FAmero del producto"?: PrimitiveOverrideProps<TextProps>;
    "*******6194"?: PrimitiveOverrideProps<TextProps>;
    "Cuota mensual"?: PrimitiveOverrideProps<TextProps>;
    "$785.902,00"?: PrimitiveOverrideProps<TextProps>;
    "Deuda a la fecha"?: PrimitiveOverrideProps<TextProps>;
    "$18.785.902,00"?: PrimitiveOverrideProps<TextProps>;
    "Fecha l\u00EDmite de pago"?: PrimitiveOverrideProps<TextProps>;
    "04/06/2023"?: PrimitiveOverrideProps<TextProps>;
    "Fecha del \u00FAltimo pago"?: PrimitiveOverrideProps<TextProps>;
    "04/05/2023"?: PrimitiveOverrideProps<TextProps>;
    "Inter\u00E9s fijo mensual"?: PrimitiveOverrideProps<TextProps>;
    "2,3%"?: PrimitiveOverrideProps<TextProps>;
    "Group 195"?: PrimitiveOverrideProps<FlexProps>;
    Button40583099?: PrimitiveOverrideProps<ButtonProps>;
    Button40583100?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProductInformationProps = React.PropsWithChildren<Partial<FlexProps> & {
    ActionBack?: (event: SyntheticEvent) => void;
    monthFee?: String;
    numberProduct?: String;
    debtDate?: String;
    limitDate?: String;
    lastDate?: String;
    rate?: String;
    Action?: (event: SyntheticEvent) => void;
    btnClassName?: String;
    ActionPay?: (event: SyntheticEvent) => void;
    prodName?: String;
} & {
    overrides?: ProductInformationOverridesProps | undefined | null;
}>;
export default function ProductInformation(props: ProductInformationProps): React.ReactElement;
