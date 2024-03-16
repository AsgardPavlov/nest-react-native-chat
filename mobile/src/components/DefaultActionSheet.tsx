import React from "react";
import { Text, View } from "react-native";
import ActionSheet, { ScrollView } from "react-native-actions-sheet";
import Toast from "react-native-toast-message";
import { commonStyles } from "styles/common";
import { fontSize } from "utils/font-size-helper";

interface DefaultActionSheetProps
  extends Omit<
    React.ComponentProps<typeof ActionSheet>,
    "containerStyle" | "indicatorStyle" | "gestureEnabled"
  > {
  title: string;
  description?: string;
}

const DefaultActionSheet = ({
  title,
  description,
  children,
  ...props
}: DefaultActionSheetProps) => {
  return (
    <ActionSheet
      containerStyle={{
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
      }}
      indicatorStyle={{
        width: 100
      }}
      gestureEnabled
      {...props}
    >
      <View
        style={[
          commonStyles.screenVerticalPadding,
          commonStyles.screenHorizontalPadding
        ]}
      >
        <Text
          style={[commonStyles.defaultFontBold, { fontSize: fontSize.xlarge }]}
        >
          {title}
        </Text>
        {description && (
          <Text
            style={[
              commonStyles.defaultFont,
              { fontSize: fontSize.small, marginTop: 4 }
            ]}
          >
            {description}
          </Text>
        )}
      </View>
      <ScrollView
        contentContainerStyle={[
          commonStyles.screenVerticalPadding,
          commonStyles.screenHorizontalPadding
        ]}
      >
        {children}
      </ScrollView>
    </ActionSheet>
  );
};

export default DefaultActionSheet;
