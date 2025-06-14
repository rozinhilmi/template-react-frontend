import { Button, HStack, Text } from "@chakra-ui/react";
import { UsernameInput } from "./sections/Input";
import { setStore, store, useStore } from "../../utils/store/store";
import { useStyle } from "@/components/theme";
import { StoreInterface } from "@/utils/store/interface";
import { Helmet } from "react-helmet";

export const Index = () => {
  const count = store("count");
  const inputState = store("inputState");
  const allStore = useStore<StoreInterface>((state) => state);

  const increment = () => {
    setStore("count", count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setStore("count", count - 1);
    }
  };
  const style = useStyle();
  console.log("render");

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <HStack color={style.primaryTextColor} marginBottom={"30px"}>
        <Button onClick={decrement}>decrement</Button>
        <Text>count : {count}</Text>
        <Button onClick={increment}>increment</Button>
      </HStack>
      <UsernameInput />
      <pre style={{ color: style.primaryTextColor }}>
        {JSON.stringify(
          {
            count: count,
            inputState: inputState,
          },
          null,
          2
        )}
      </pre>
      <pre style={{ color: style.primaryTextColor }}>{JSON.stringify(allStore, null, 2)}</pre>
    </div>
  );
};
