import { useStyle } from "@/components/theme";
import { Stack, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  const style = useStyle();
  return (
    <Stack width={"100vw"} height={"100vh"} justifyContent={"center"} alignItems={"center"} color={style.primaryTextTitleColor} lineHeight={"30px"}>
      <Helmet>
        <title>404</title>
      </Helmet>
      <Text fontSize={"50px"} fontWeight={"bold"}>
        404
      </Text>
      <Text fontSize={"25px"}>Page Not Found</Text>
    </Stack>
  );
};

export default NotFoundPage;
