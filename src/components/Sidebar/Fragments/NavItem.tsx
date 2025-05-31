import { useStyle } from "@/components/theme";
import { Text, Stack, HStack, Icon } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router";
export const NavItem = (props: { label: string; link: string; icon: any; setShowSidebar?: any }) => {
  const location = useLocation();
  const active = location.pathname == props.link;
  const style = useStyle();
  return (
    <NavLink to={props.link} onClick={() => props.setShowSidebar((prev: boolean) => !prev)}>
      <HStack
        width={"100%"}
        transition="200ms"
        justifyContent={"flex-start"}
        alignItems="center"
        _hover={{ backgroundColor: style.selectedItem }}
        bg={active ? style.selectedItem : "null"}
        color={active ? style.primaryTextTitleColor : style.secondaryTextColor}
        borderRadius={style.borderRadius}
        paddingY={"10px"}
        paddingX={"10px"}
        gap={"14px"}
      >
        <Stack
          width={"30px"}
          height={"30px"}
          backgroundColor={active ? style.primaryColor : style.selectedItem}
          // backgroundColor={primaryColor()}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"12px"}
        >
          <Icon color={active ? "white" : "#42AA58"} as={props.icon} width={"15px"} height={"15px"} />
        </Stack>
        <Text fontSize={"12px"} as={"b"}>
          {props.label}
        </Text>
      </HStack>
    </NavLink>
  );
};
