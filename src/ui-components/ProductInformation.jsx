/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function ProductInformation(props) {
  const {
    ActionBack,
    monthFee = "$120.000",
    numberProduct = "1231214-12",
    debtDate = "$1.000.000",
    limitDate,
    lastDate,
    rate = "1.3%",
    Action,
    btnClassName = "btn-sec-cust",
    ActionPay,
    prodName = "Cr\u00E9dito Personal",
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProductInformation")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="215px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 194")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(45,43,42,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="13.49%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Crédito de libranza"
          {...getOverrideProps(overrides, "Cr\u00E9dito de libranza")}
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
          top="88.54%"
          bottom="-68.54%"
          left="11.16%"
          right="77.67%"
          transformOrigin="top left"
          transform="rotate(180deg)"
          padding="0px 0px 0px 0px"
          type="arrow-right"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="355px"
        height="264px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 197")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(45,43,42,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="90.91%"
          left="0%"
          right="42.54%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Número del producto"
          {...getOverrideProps(overrides, "N\u00FAmero del producto")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(45,43,42,1)"
          lineHeight="24px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="90.91%"
          left="66.2%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="*******6194"
          {...getOverrideProps(overrides, "*******6194")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(45,43,42,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="18.18%"
          bottom="72.73%"
          left="0%"
          right="59.44%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Cuota mensual"
          {...getOverrideProps(overrides, "Cuota mensual")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(45,43,42,1)"
          lineHeight="24px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="18.18%"
          bottom="72.73%"
          left="65.35%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="$785.902,00"
          {...getOverrideProps(overrides, "$785.902,00")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(45,43,42,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="36.36%"
          bottom="54.55%"
          left="0%"
          right="54.37%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Deuda a la fecha"
          {...getOverrideProps(overrides, "Deuda a la fecha")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(45,43,42,1)"
          lineHeight="24px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="36.36%"
          bottom="54.55%"
          left="57.75%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="$18.785.902,00"
          {...getOverrideProps(overrides, "$18.785.902,00")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(45,43,42,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="54.55%"
          bottom="36.36%"
          left="0%"
          right="43.66%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Fecha límite de pago"
          {...getOverrideProps(overrides, "Fecha l\u00EDmite de pago")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(45,43,42,1)"
          lineHeight="24px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="54.55%"
          bottom="36.36%"
          left="67.32%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="04/06/2023"
          {...getOverrideProps(overrides, "04/06/2023")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(45,43,42,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="72.73%"
          bottom="18.18%"
          left="0%"
          right="40.28%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Fecha del último pago"
          {...getOverrideProps(overrides, "Fecha del \u00FAltimo pago")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(45,43,42,1)"
          lineHeight="24px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="72.73%"
          bottom="18.18%"
          left="67.32%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="04/05/2023"
          {...getOverrideProps(overrides, "04/05/2023")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(45,43,42,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="90.91%"
          bottom="0%"
          left="0%"
          right="47.04%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Interés fijo mensual"
          {...getOverrideProps(overrides, "Inter\u00E9s fijo mensual")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(45,43,42,1)"
          lineHeight="24px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="90.91%"
          bottom="0%"
          left="86.76%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="2,3%"
          {...getOverrideProps(overrides, "2,3%")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="355px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 195")}
      >
        <Button
          width="103px"
          height="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="70.99%"
          right="0%"
          backgroundColor="rgba(253,217,38,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Pagar"
          onClick={ActionPay}
          {...getOverrideProps(overrides, "Button40583099")}
        ></Button>
        <Button
          width="230px"
          height="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="35.21%"
          backgroundColor="rgba(37,35,35,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Extractos y certificados"
          onClick={Action}
          {...getOverrideProps(overrides, "Button40583100")}
        ></Button>
      </Flex>
    </Flex>
  );
}
