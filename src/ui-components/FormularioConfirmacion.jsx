/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Alert, Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function FormularioConfirmacion(props) {
  const {
    onClickBack,
    loaderState,
    number,
    date,
    amount,
    Action,
    ActionFin,
    alertState,
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
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FormularioConfirmacion")}
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
          width="138px"
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
            left="23.91%"
            right="0%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Confirmación"
            {...getOverrideProps(overrides, "Confirmaci\u00F3n")}
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
        <TextField
          width="unset"
          height="unset"
          label="Número de comprobante"
          placeholder="*******6194"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          {...getOverrideProps(overrides, "TextField39693455")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Fecha y hora de transacción"
          placeholder="04/07/2023    11:09:55"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          {...getOverrideProps(overrides, "TextField39693456")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Monto pagado"
          placeholder="$785.902,00"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          {...getOverrideProps(overrides, "TextField39693457")}
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
          height="46.28px"
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
            height="46px"
            position="absolute"
            top="0px"
            left="0px"
            backgroundColor="rgba(37,35,35,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Comprobante"
            onClick={Action}
            {...getOverrideProps(overrides, "Button39693460")}
          ></Button>
          <Button
            width="155.84px"
            height="46px"
            position="absolute"
            top="0.61%"
            bottom="0%"
            left="54.83%"
            right="0%"
            backgroundColor="rgba(253,217,38,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Finalizar"
            onClick={ActionFin}
            {...getOverrideProps(overrides, "Button39693461")}
          ></Button>
        </Flex>
        <Alert
          width="345px"
          height="unset"
          heading="Tu pago se ha realizado de forma &#x2028;exitosa"
          shrink="0"
          variation="success"
          isDismissible={true}
          hasIcon={false}
          children="Recuerda que el pago de tu crédito se verá reflejado en tu extracto bancario."
          {...getOverrideProps(overrides, "Alert")}
        ></Alert>
      </Flex>
    </Flex>
  );
}
