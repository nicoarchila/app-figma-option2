/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoProps } from "./Logo";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarHeaderMobileOverridesProps = {
    NavBarHeaderMobile?: PrimitiveOverrideProps<FlexProps>;
    Logo?: LogoProps;
    menu?: PrimitiveOverrideProps<FlexProps>;
    rectangulo?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type NavBarHeaderMobileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarHeaderMobileOverridesProps | undefined | null;
}>;
export default function NavBarHeaderMobile(props: NavBarHeaderMobileProps): React.ReactElement;
