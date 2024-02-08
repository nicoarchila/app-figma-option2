/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Button, Divider, Flex, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function ActionCard(props) {
  const {
    tittle = "Cuenta",
    productName = "Cuenta de Ahorros",
    numberProduct = "$10.000.000",
    CurrentActual = "$1.000.000",
    btnClassName,
    actionDetails,
    islot,
    dateLimit = "15/08/2023",
    actionTransfer,
    actionTranfer,
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [
    {
      overrides: {
        Cuentas: {},
        MyIcon: {},
        "Group 187": {},
        Divider: {},
        "Cuenta de ahorro": {},
        "N\u00FAmero de producto": {},
        "*******6194": {},
        Producto38733041: {},
        "Saldo actual": {},
        "$785.902,00": {},
        Saldo: {},
        "Fecha l\u00EDmite de pago": {},
        "04/06/2023": {},
        Producto38733416: {},
        "Product Title": {},
        "Frame 417": {},
        "Main Text": {},
        Button38733125: {},
        Button29766759: {},
        "Group 188": {},
        "Card Area": {},
        ActionCard: {},
      },
      variantValues: { prod_type: "passive" },
    },
    {
      overrides: {
        Cuentas: {},
        MyIcon: {},
        "Group 187": {},
        Divider: {},
        "Cuenta de ahorro": {},
        "N\u00FAmero de producto": {},
        "*******6194": {},
        Producto38733041: {},
        "Saldo actual": {},
        "$785.902,00": {},
        Saldo: {},
        "Fecha l\u00EDmite de pago": { color: "rgba(0,0,0,1)" },
        "04/06/2023": { color: "rgba(0,0,0,1)" },
        Producto38733416: { display: "block" },
        "Product Title": {},
        "Frame 417": {},
        "Main Text": { height: "160px" },
        Button38733125: {},
        Button29766759: { children: "Pagar" },
        "Group 188": {},
        "Card Area": {},
        ActionCard: {},
      },
      variantValues: { prod_type: "active" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="356px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 4px 16px rgba(0, 0.1725490242242813, 0.5215686559677124, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundImage="linear-gradient(-90deg, rgba(231,232,237,1), rgba(231,232,237,0.1))"
      display="flex"
      {...getOverrideProps(overrides, "ActionCard")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        display="flex"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Main Text")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="310px"
            height="23px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Group 187")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="281px"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="calc(50% - 10px - 0.5px)"
              left="calc(50% - 140.5px - -14.5px)"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Cuentas"
              {...getOverrideProps(overrides, "Cuentas")}
            ></Text>
            <MyIcon
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              type="peso"
              {...getOverrideProps(overrides, "MyIcon")}
            ></MyIcon>
          </Flex>
          <Divider
            width="unset"
            height="1px"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider")}
          ></Divider>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="space-between"
            alignItems="flex-end"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 417")}
          >
            <Flex
              gap="8px"
              direction="column"
              width="322px"
              height="153px"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Product Title")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
                lineHeight="20px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="322px"
                height="23px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Cuenta de ahorro"
                {...getOverrideProps(overrides, "Cuenta de ahorro")}
              ></Text>
              <Flex
                padding="0px 0px 0px 0px"
                width="309px"
                height="23px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Producto38733041")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(0,0,0,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0.01px"
                  width="186px"
                  height="23px"
                  gap="unset"
                  alignItems="unset"
                  position="absolute"
                  bottom="0px"
                  left="0%"
                  right="39.81%"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Número de producto"
                  {...getOverrideProps(overrides, "N\u00FAmero de producto")}
                ></Text>
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(0,0,0,1)"
                  lineHeight="20px"
                  textAlign="right"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="131px"
                  height="19px"
                  gap="unset"
                  alignItems="unset"
                  position="absolute"
                  top="2px"
                  left="178px"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="*******6194"
                  {...getOverrideProps(overrides, "*******6194")}
                ></Text>
              </Flex>
              <Flex
                padding="0px 0px 0px 0px"
                width="309px"
                height="23px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Saldo")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(0,0,0,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0.01px"
                  width="171px"
                  height="23px"
                  gap="unset"
                  alignItems="unset"
                  position="absolute"
                  top="0px"
                  left="0px"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Saldo actual"
                  {...getOverrideProps(overrides, "Saldo actual")}
                ></Text>
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(0,0,0,1)"
                  lineHeight="20px"
                  textAlign="right"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="131px"
                  height="19px"
                  gap="unset"
                  alignItems="unset"
                  position="absolute"
                  top="2px"
                  left="178px"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="$785.902,00"
                  {...getOverrideProps(overrides, "$785.902,00")}
                ></Text>
              </Flex>
              <Flex
                padding="0px 0px 0px 0px"
                width="309px"
                height="23px"
                display="none"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Producto38733416")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(24,51,114,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0.01px"
                  width="201px"
                  height="23px"
                  gap="unset"
                  alignItems="unset"
                  position="absolute"
                  bottom="0px"
                  left="0%"
                  right="34.95%"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Fecha límite de pago"
                  {...getOverrideProps(overrides, "Fecha l\u00EDmite de pago")}
                ></Text>
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(24,51,114,1)"
                  lineHeight="20px"
                  textAlign="right"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="145px"
                  height="19px"
                  gap="unset"
                  alignItems="unset"
                  position="absolute"
                  top="2px"
                  left="164px"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="04/06/2023"
                  {...getOverrideProps(overrides, "04/06/2023")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="324px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 188")}
        >
          <Button
            width="152.08px"
            height="unset"
            position="absolute"
            top="0px"
            left="0px"
            backgroundColor="rgba(20,42,93,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            className={btnClassName}
            children="Ver detalle"
            onClick={actionDetails}
            {...getOverrideProps(overrides, "Button38733125")}
          ></Button>
          <Button
            width="152.08px"
            height="unset"
            position="absolute"
            top="0px"
            left="171.92px"
            backgroundColor="rgba(109,182,88,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Transferir"
            onClick={actionTranfer}
            {...getOverrideProps(overrides, "Button29766759")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
