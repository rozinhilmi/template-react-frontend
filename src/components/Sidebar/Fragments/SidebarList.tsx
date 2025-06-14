import { Stack } from "@chakra-ui/react";
import { NavItem } from "./NavItem";
import { BsFillHouseFill } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { NavAccordion } from "./NavAccordion";
import { IoStorefrontSharp } from "react-icons/io5";

export const SidebarList = (props: { menus: any; setShowSidebar: any }) => {
  return (
    <Stack width={"100%"} gap={"12px"}>
      <NavItem label={"Dashboard"} link={"/"} icon={BsFillHouseFill} setShowSidebar={props.setShowSidebar} />
      <NavItem label={"Store"} link={"/store"} icon={IoStorefrontSharp} setShowSidebar={props.setShowSidebar} />
      <NavAccordion label={"Kelola Akun"} payload={props.menus.navcordionMenu1} icon={MdPeopleAlt} setShowSidebar={props.setShowSidebar} />
    </Stack>
  );
};
