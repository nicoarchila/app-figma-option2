/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, LoaderProps, RadioProps, SelectFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormularioConfiguracionOverridesProps = {
    FormularioConfiguracion?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Group 192"?: PrimitiveOverrideProps<FlexProps>;
    "Configuraci\u00F3n"?: PrimitiveOverrideProps<TextProps>;
    MyIcon?: MyIconProps;
    Loader?: PrimitiveOverrideProps<LoaderProps>;
    "Frame 42639692656"?: PrimitiveOverrideProps<FlexProps>;
    SelectField39692657?: PrimitiveOverrideProps<SelectFieldProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    TextField39692659?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39692660?: PrimitiveOverrideProps<TextFieldProps>;
    "Group 190"?: PrimitiveOverrideProps<FlexProps>;
    Radio39692662?: PrimitiveOverrideProps<RadioProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    Radio39692664?: PrimitiveOverrideProps<RadioProps>;
    TextField39692665?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 42639692666"?: PrimitiveOverrideProps<FlexProps>;
    SelectField39692667?: PrimitiveOverrideProps<SelectFieldProps>;
    "Frame 411"?: PrimitiveOverrideProps<FlexProps>;
    "Group 191"?: PrimitiveOverrideProps<FlexProps>;
    Button39692670?: PrimitiveOverrideProps<ButtonProps>;
    Button39692671?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type FormularioConfiguracionProps = React.PropsWithChildren<Partial<FlexProps> & {
    loaderState?: String;
    onTargetProdChange?: (event: SyntheticEvent) => void;
    targetProduct?: String;
    paymentAmount?: String;
    paymentDate?: String;
    onDefaultAmountClick?: (event: SyntheticEvent) => void;
    paymentValue?: String;
    onOtherAmountChange?: (event: SyntheticEvent) => void;
    onSourceProdChange?: (event: SyntheticEvent) => void;
    sourceProdList?: React.ReactNode;
    cancel?: (event: SyntheticEvent) => void;
    onClickBtn?: (event: SyntheticEvent) => void;
    onClickBack?: (event: SyntheticEvent) => void;
    onOtherAmountClick?: (event: SyntheticEvent) => void;
    amountState?: Boolean;
    nextURI?: String;
    prevURI?: String;
} & {
    overrides?: FormularioConfiguracionOverridesProps | undefined | null;
}>;
export default function FormularioConfiguracion(props: FormularioConfiguracionProps): React.ReactElement;
