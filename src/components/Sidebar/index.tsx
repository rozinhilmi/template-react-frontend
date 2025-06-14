import { Heading, Stack, Image, HStack, Text, Button, Box } from "@chakra-ui/react";
import { Menu, X } from "react-feather";
import { BsArrowLeftShort, BsFillMoonFill, BsFillSunFill, BsNewspaper } from "react-icons/bs";
import { Divider } from "../Divider";
import { MdPerson, MdAdminPanelSettings } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { useState } from "react";
import { SidebarList } from "./Fragments/SidebarList";
import { useStore } from "../../utils/store/store";
import { useNavigate } from "react-router";
import { Pencarian } from "../Pencarian";
import { useStyle } from "../theme";

// accordion menus

const navcordionMenu1 = [
  {
    label: "Page 1",
    icon: MdPerson,
    path: "/page1",
  },
  {
    label: "Page 2",
    icon: MdAdminPanelSettings,
    path: "/page2",
  },
];

const navcordionMenu2 = [
  {
    label: "Page 3",
    icon: RiAdvertisementFill,
    path: "/page3",
  },
  {
    label: "Page 4",
    icon: BsNewspaper,
    path: "/page4",
  },
];
export const Sidebar = (props: { pageName: any; parts: any }) => {
  const currentTheme = useStore<boolean>((state) => state.currentTheme);
  const setTheme = useStore<() => void>((state) => state.setTheme);
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const style = useStyle();

  return (
    <>
      {/* sidebar layar besar */}
      <Box
        width={{ base: "100%", lg: "20rem" }}
        height={{ base: "auto", lg: "100vh" }}
        paddingX={{ base: "0", lg: "12px" }}
        overflow={"scroll"}
        zIndex={10}
        backgroundColor={style.backgroundContainer}
        position={"fixed"}
        justifyContent={"start"}
        alignItems={"start"}
        border={{ base: style.customBorder, lg: "none" }}
      >
        <Stack w={"full"} my={"auto"} paddingY={"10px"} paddingX={"12px"} position={"relative"} justifyContent={"space-between"}>
          <Stack display={{ base: "none", lg: "flex" }}>
            <HStack justifyContent={"space-between"} width={"100%"} alignItems={"start"}>
              <HStack>
                <Image src="/vite.svg" width={"42px"} aspectRatio={"1/1"} borderRadius={style.borderRadius} loading="lazy" />
                <HStack lineHeight={"0.8"} as={"b"} fontSize={"2xl"}>
                  <Text color={style.primaryTextTitleColor}>{import.meta.env.VITE_APP_NAME}</Text>
                </HStack>
              </HStack>
            </HStack>
            <Divider />
          </Stack>

          <HStack display={{ base: "flex", lg: "none" }} width={"100%"} justifyContent={"space-between"}>
            {props.parts.length > 2 ? (
              <Stack
                backgroundColor={style.backgroundContainer}
                width={"38px"}
                height={"38px"}
                border={style.customBorder}
                borderRadius={style.borderRadius}
                cursor={"pointer"}
                color={style.primaryTextColor}
                fontSize={"33px"}
                alignSelf={"center"}
                justifyContent={"center"}
                onClick={() => navigate(-1)}
              >
                <BsArrowLeftShort />
              </Stack>
            ) : (
              <Image src="/vite.svg" width={"42px"} aspectRatio={"1/1"} borderRadius={style.borderRadius} />
            )}

            <Heading color={style.primaryTextColor} fontSize={{ base: "xl", md: "2xl" }} textTransform={"capitalize"}>
              {import.meta.env.VITE_APP_NAME}
            </Heading>
            <Button
              onClick={() => {
                setShowSidebar((prev) => !prev);
              }}
              display={{ lg: "none" }}
              color={style.primaryTextTitleColor}
              p={2}
              size={"md"}
              width={"40px"}
              backgroundColor={style.backgroundContainer}
            >
              {showSidebar ? <X /> : <Menu />}
            </Button>
          </HStack>
        </Stack>

        <Stack alignItems={"center"} width={"100%"} display={{ base: "none", lg: "flex" }}>
          <Stack width={"100%"} marginBottom={"12px"} alignItems={"center"}>
            <HStack
              borderRadius={"30px"}
              backgroundColor={style.backgroundContainer}
              border={style.customBorder}
              paddingY={"10px"}
              paddingX={"20px"}
              maxWidth={"100vw"}
              width={"250px"}
              justifyContent={"space-between"}
            >
              <Pencarian />

              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                fontSize={"18px"}
                objectFit={"contain"}
                color={"#A3AED0"}
                cursor={"pointer"}
                onClick={setTheme}
              >
                {currentTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
              </Stack>
            </HStack>
          </Stack>
          <SidebarList
            menus={{
              navcordionMenu1: navcordionMenu1,
              navcordionMenu2: navcordionMenu2,
            }}
            setShowSidebar={setShowSidebar}
          />
        </Stack>
      </Box>

      {/* sidebar layar kecil */}
      <Stack
        transition={"0.3s"}
        paddingX={"5px"}
        alignItems={"center"}
        width={"100%"}
        display={{ lg: "none" }}
        position={"fixed"}
        backgroundColor={style.backgroundContainer}
        transform={showSidebar ? "translateY(0%)" : "translateY(-100%)"}
        paddingTop={"calc(1.7cm + 12px)"}
        zIndex={9}
        border={style.customBorder}
        minHeight={"100vh"}
        overflow={"scroll"}
      >
        <Stack width={"100%"} marginBottom={"12px"} alignItems={"center"}>
          <HStack
            borderRadius={"30px"}
            backgroundColor={style.backgroundContainer}
            border={style.customBorder}
            paddingY={"10px"}
            paddingX={"20px"}
            maxWidth={"100vw"}
            width={"250px"}
            justifyContent={"space-between"}
          >
            <Pencarian />
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={"18px"}
              objectFit={"contain"}
              color={"#A3AED0"}
              cursor={"pointer"}
              onClick={setTheme}
            >
              {currentTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
            </Stack>
          </HStack>
        </Stack>
        <SidebarList
          menus={{
            navcordionMenu1: navcordionMenu1,
            navcordionMenu2: navcordionMenu2,
          }}
          setShowSidebar={setShowSidebar}
        />
      </Stack>
      {/* {modal === "pencarian" ? <Pencarian isOpen={isOpen} onClose={onClose} /> : null} */}
    </>
  );
};
