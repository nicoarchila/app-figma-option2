/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, LoaderProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormularioVerificacionOverridesProps = {
    FormularioVerificacion?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Group 192"?: PrimitiveOverrideProps<FlexProps>;
    "Verificaci\u00F3n"?: PrimitiveOverrideProps<TextProps>;
    MyIcon?: MyIconProps;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    Loader?: PrimitiveOverrideProps<LoaderProps>;
    TextField39693124?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39693125?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39693126?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40562935?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 411"?: PrimitiveOverrideProps<FlexProps>;
    "Group 191"?: PrimitiveOverrideProps<FlexProps>;
    Button39693129?: PrimitiveOverrideProps<ButtonProps>;
    Button39693130?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type FormularioVerificacionProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FormularioVerificacionOverridesProps | undefined | null;
}>;
export default function FormularioVerificacion(props: FormularioVerificacionProps): React.ReactElement;
