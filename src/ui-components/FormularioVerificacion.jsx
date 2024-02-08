/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Loader, Text, TextField } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function FormularioVerificacion(props) {
  const {
    onClickBack,
    loaderState = "loader-dis",
    onChangePay,
    tarjetProd,
    onChangeDeb,
    sourceProd,
    onChangeInput,
    payAmount,
    trxCost = "$ -",
    onClickCancel,
    onClickNext,
    nextURI,
    prevURI,
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="345px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FormularioVerificacion")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 406")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="126px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 192")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="8.33%"
            bottom="8.33%"
            left="26.19%"
            right="0%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Verificación"
            {...getOverrideProps(overrides, "Verificaci\u00F3n")}
          ></Text>
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="24px"
            left="24px"
            transformOrigin="top left"
            transform="rotate(180deg)"
            padding="0px 0px 0px 0px"
            type="arrow-right"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
        </Flex>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 409")}
      >
        <Loader
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="large"
          variation="linear"
          className={loaderState}
          {...getOverrideProps(overrides, "Loader")}
        ></Loader>
        <TextField
          width="unset"
          height="unset"
          label="Producto a pagar"
          placeholder="Crédito de libranza *******6194"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          {...getOverrideProps(overrides, "TextField39693124")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Producto a debitar"
          placeholder="Cuenta de ahorros *******6194"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          {...getOverrideProps(overrides, "TextField39693125")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Monto a pagar"
          placeholder="$785.902,00"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          {...getOverrideProps(overrides, "TextField39693126")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Costo de la transacción"
          placeholder="$5.902,00"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          {...getOverrideProps(overrides, "TextField40562935")}
        ></TextField>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="345px"
          height="46px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 191")}
        >
          <Button
            width="167.55px"
            height="unset"
            position="absolute"
            top="0px"
            left="0px"
            backgroundColor="rgba(20,42,93,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Cancelar"
            onClick={onClickCancel}
            {...getOverrideProps(overrides, "Button39693129")}
          ></Button>
          <Button
            width="155.84px"
            height="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="54.83%"
            right="0%"
            backgroundColor="rgba(109,182,88,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Continuar"
            onClick={onClickNext}
            {...getOverrideProps(overrides, "Button39693130")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
