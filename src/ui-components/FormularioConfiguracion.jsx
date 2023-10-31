/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  Flex,
  Loader,
  Radio,
  SelectField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function FormularioConfiguracion(props) {
  const {
    loaderState = "loader-dis",
    onTargetProdChange,
    targetProduct,
    paymentDate,
    onDefaultAmountClick,
    paymentValue,
    onOtherAmountChange,
    onSourceProdChange,
    sourceProdList,
    cancel,
    onClickBtn,
    onClickBack,
    onOtherAmountClick,
    amountState,
    nextURI,
    prevURI,
    paymentAmount,
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="350px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FormularioConfiguracion")}
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
          width="143px"
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
            left="23.08%"
            right="0%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Configuración"
            {...getOverrideProps(overrides, "Configuraci\u00F3n")}
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
        <Loader
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="large"
          variation="linear"
          {...getOverrideProps(overrides, "Loader")}
        ></Loader>
        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 42639692656")}
        >
          <SelectField
            width="unset"
            height="unset"
            label="Producto a pagar"
            grow="1"
            shrink="1"
            basis="0"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField39692657")}
          ></SelectField>
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
          label="Deuda a la fecha"
          placeholder="$18.875.902,00"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          {...getOverrideProps(overrides, "TextField39692659")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Fecha límite de pago"
          placeholder="04/07/2023"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          {...getOverrideProps(overrides, "TextField39692660")}
        ></TextField>
        <Flex
          padding="0px 0px 0px 0px"
          width="316px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 190")}
        >
          <Radio
            width="unset"
            height="unset"
            position="absolute"
            top="0px"
            left="0px"
            size="large"
            defaultChecked={true}
            isDisabled={false}
            labelPosition="end"
            children="Pago de cuota mensual  "
            {...getOverrideProps(overrides, "Radio39692662")}
          ></Radio>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(2,6,19,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            right="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="$785.902,00"
            {...getOverrideProps(overrides, "label")}
          ></Text>
        </Flex>
        <Radio
          width="unset"
          height="unset"
          shrink="0"
          size="large"
          defaultChecked={false}
          isDisabled={false}
          labelPosition="end"
          children="Otro monto"
          {...getOverrideProps(overrides, "Radio39692664")}
        ></Radio>
        <TextField
          width="unset"
          height="unset"
          label="Digita el monto a pagar"
          shrink="0"
          alignSelf="stretch"
          placeholder=""
          size="default"
          isDisabled={true}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "TextField39692665")}
        ></TextField>
        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 42639692666")}
        >
          <SelectField
            width="unset"
            height="unset"
            label="Producto a debitar"
            grow="1"
            shrink="1"
            basis="0"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField39692667")}
          ></SelectField>
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
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="350px"
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
            width="169.97px"
            height="unset"
            position="absolute"
            top="0px"
            left="0px"
            backgroundColor="rgba(14,39,124,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Cancelar"
            onClick={cancel}
            {...getOverrideProps(overrides, "Button39692670")}
          ></Button>
          <Button
            width="158.09px"
            height="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="54.83%"
            right="0%"
            backgroundColor="rgba(227,232,84,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Continuar"
            onClick={onClickBtn}
            {...getOverrideProps(overrides, "Button39692671")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
