/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AlertProps, ButtonProps, FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormularioConfirmacionOverridesProps = {
    FormularioConfirmacion?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Group 192"?: PrimitiveOverrideProps<FlexProps>;
    "Confirmaci\u00F3n"?: PrimitiveOverrideProps<TextProps>;
    MyIcon?: MyIconProps;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    TextField39693455?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39693456?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39693457?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 411"?: PrimitiveOverrideProps<FlexProps>;
    "Group 191"?: PrimitiveOverrideProps<FlexProps>;
    Button39693460?: PrimitiveOverrideProps<ButtonProps>;
    Button39693461?: PrimitiveOverrideProps<ButtonProps>;
    Alert?: PrimitiveOverrideProps<AlertProps>;
} & EscapeHatchProps;
export declare type FormularioConfirmacionProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FormularioConfirmacionOverridesProps | undefined | null;
}>;
export default function FormularioConfirmacion(props: FormularioConfirmacionProps): React.ReactElement;
