/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Badge, Flex, View } from "@aws-amplify/ui-react";
export default function DataList(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="40px"
      direction="column"
      width="439px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="40px 40px 40px 40px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DataList")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="359px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 184")}
      >
        <Badge
          width="86.43px"
          height="unset"
          position="absolute"
          top="0px"
          left="0px"
          size="default"
          variation="info"
          children="Fecha"
          {...getOverrideProps(overrides, "Badge387012521")}
        ></Badge>
        <Badge
          width="139.61px"
          height="unset"
          position="absolute"
          top="0px"
          left="111.69px"
          size="default"
          variation="info"
          children="Descripción"
          {...getOverrideProps(overrides, "Badge387012526")}
        ></Badge>
        <Badge
          width="79.78px"
          height="unset"
          position="absolute"
          top="0px"
          left="279.22px"
          size="default"
          variation="info"
          children="Valor"
          {...getOverrideProps(overrides, "Badge387012529")}
        ></Badge>
      </Flex>
      <View
        width="unset"
        height="164px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 437")}
      ></View>
    </Flex>
  );
}
