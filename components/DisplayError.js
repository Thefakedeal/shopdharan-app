import React from "react";
import { Text } from "react-native";

import colors from "../defaults/colors.json";

export default function DisplayError({ errorText = "" }) {
  return (
    <Text
      style={{
        fontSize: 20,
        color: colors.PRIMARY_RED,
        marginVertical: 2,
      }}
    >
      {String(errorText)}
    </Text>
  );
}
