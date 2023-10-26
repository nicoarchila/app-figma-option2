/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, PasswordFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginMobileOverridesProps = {
    LoginMobile?: PrimitiveOverrideProps<FlexProps>;
    "Frame 428"?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LoginMobileProps = React.PropsWithChildren<Partial<FlexProps> & {
    onchangeUser?: (event: SyntheticEvent) => void;
    onChangePassword?: (event: SyntheticEvent) => void;
    validSession?: (event: SyntheticEvent) => void;
    className?: String;
} & {
    overrides?: LoginMobileOverridesProps | undefined | null;
}>;
export default function LoginMobile(props: LoginMobileProps): React.ReactElement;
