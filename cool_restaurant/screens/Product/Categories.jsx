import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";

const Categories = () => {
  const [selected, setSelected] = React.useState("");
  const data = [
    { key: "1", value: "Pizza" },
    { key: "2", value: "Pasta" },
    { key: "3", value: "Hamburger" },
    { key: "4", value: "Salade"  },
    { key: "5", value: "Other" },
 
  ];

  return (
    <View>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
