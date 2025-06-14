import { Input } from "@chakra-ui/react";
import { setStore, store } from "../../../utils/store/store";
import { useStyle } from "@/components/theme";

export const UsernameInput = () => {
  const inputState = store("inputState");
  const style = useStyle();
  return (
    <>
      <Input
        color={style.primaryTextColor}
        value={inputState}
        onChange={(e) => {
          setStore("inputState", e.target.value);
        }}
      />
    </>
  );
};
