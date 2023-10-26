/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormularioLoginOverridesProps = {
    FormularioLogin?: PrimitiveOverrideProps<ViewProps>;
    "Ingresa tu usuario y contrase\u00F1a para iniciar sesi\u00F3n"?: PrimitiveOverrideProps<TextProps>;
    "Recuerda que si a\u00FAn no tienes una cuenta puedes"?: PrimitiveOverrideProps<TextProps>;
    "Hola, nos da mucho gusto que est\u00E9s aqu\u00ED"?: PrimitiveOverrideProps<TextProps>;
    Formulario?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Registrarte aqu\u00ED"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FormularioLoginProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FormularioLoginOverridesProps | undefined | null;
}>;
export default function FormularioLogin(props: FormularioLoginProps): React.ReactElement;
