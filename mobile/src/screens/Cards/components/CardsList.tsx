import { FlatList, RefreshControl } from "react-native";
import { useOmise } from "contexts/OmiseProvider";
import { Colors } from "styles/colors";
import { commonStyles } from "styles/common";
import { card } from "types/generated";

import Card from "./Card";
import CardsEmptyStatement from "./CardsEmptyStatement";

interface CardsListProps {
  list: card[];
}

const CardsList = ({ list }: CardsListProps) => {
  const { refetchCutomer, isCustomerLoading } = useOmise();

  return (
    <FlatList
      data={list}
      style={[commonStyles.flex]}
      contentContainerStyle={[
        commonStyles.screenVerticalPadding,
        commonStyles.screenHorizontalPadding,
        { gap: 22 }
      ]}
      keyExtractor={(item) => item.id as string}
      renderItem={({ item }) => <Card card={item} />}
      refreshing={isCustomerLoading}
      ListEmptyComponent={<CardsEmptyStatement />}
      refreshControl={
        <RefreshControl
          refreshing={isCustomerLoading}
          onRefresh={refetchCutomer}
          colors={[Colors.PRIMARY]}
        />
      }
    />
  );
};

export default CardsList;
