import { Accordion, Text, Icon, HStack, Stack } from "@chakra-ui/react";
import { NavAccordionItem } from "./NavAccordionItem";
import { useStyle } from "@/components/theme";

export const NavAccordion = (props: { payload: any; label: any; icon: any; setShowSidebar?: any }) => {
  const style = useStyle();
  return (
    <>
      <Accordion.Root collapsible defaultValue={["b"]}>
        <Accordion.Item value="" border={"none"}>
          <Accordion.ItemTrigger
            borderRadius={style.borderRadius}
            paddingY={"10px"}
            paddingX={"10px"}
            color={style.secondaryTextColor}
            _hover={{ backgroundColor: style.selectedItem }}
          >
            <HStack width={"100%"} transition="200ms" justifyContent={"flex-start"} alignItems="center" gap={"14px"}>
              <Stack
                width={"30px"}
                height={"30px"}
                backgroundColor={style.selectedItem}
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={"12px"}
              >
                <Icon color={"#42AA58"} as={props.icon} width={"15px"} height={"15px"} />
              </Stack>

              <Text fontSize={"12px"} as={"b"}>
                {props.label}
              </Text>
            </HStack>
            <Accordion.ItemIndicator color={"#42AA58"} />
          </Accordion.ItemTrigger>

          <Accordion.ItemContent p={0} display={"flex"} flexDir={"column"} marginLeft={"20px"} marginTop={"10px"} gap={"5px"}>
            <Accordion.ItemBody>
              {props.payload.map((item: any, index: number) => {
                return <NavAccordionItem key={index} label={item.label} path={item.path} icon={item.icon} setShowSidebar={props.setShowSidebar} />;
              })}
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
};
