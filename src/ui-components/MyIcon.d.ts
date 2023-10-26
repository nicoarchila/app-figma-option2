/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyIconOverridesProps = {
    MyIcon?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type MyIconProps = React.PropsWithChildren<Partial<IconProps> & {
    type?: "Buscar" | "ajustes" | "alerta" | "arrow-right" | "atras" | "billetera" | "check-circular" | "check-cuadrado" | "checkmark" | "compras" | "contrase\u00F1a" | "corazon" | "correo" | "descuento" | "documento" | "eliminar" | "fecha" | "feliz" | "global" | "info" | "inicio" | "mas" | "menos" | "mensaje" | "more_horiz" | "more_vert" | "opciones" | "perfil" | "peso" | "salir" | "salir-circular" | "seguridad" | "siguiente" | "tarjeta-credito" | "telefono" | "ubicacion";
} & {
    overrides?: MyIconOverridesProps | undefined | null;
}>;
export default function MyIcon(props: MyIconProps): React.ReactElement;
