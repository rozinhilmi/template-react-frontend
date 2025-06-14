import { Dialog, Input, InputGroup, Portal, Stack } from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";
import { useStyle } from "./theme";

export const Pencarian = () => {
  const style = useStyle();
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Stack alignItems={"center"} justifyContent={"center"} fontSize={"18px"} objectFit={"contain"} color={"#A3AED0"} cursor={"pointer"}>
          <FaSearch />
        </Stack>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop backdropFilter={"blur(20px)"} />
        <Dialog.Positioner>
          <Dialog.Content backgroundColor={style.backgroundContainer} borderRadius={style.borderRadius} border={style.customBorder}>
            <Dialog.Body padding={"10px"}>
              <InputGroup startElement={<FaSearch />} color={style.secondaryTextColor} colorPalette={"teal"}>
                <Input backgroundColor={style.inputBackgroundColor} border={style.customBorder} color={style.inputColor} placeholder="Cari" />
              </InputGroup>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
