import { LoadingComponent } from "@/components/LoadingComponent";
import { useStyle } from "@/components/theme";
import { Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { getData } from "./fetching";

export const Index = () => {
  const params = useParams();
  const {
    data: dataState,
    isFetching,
    isSuccess,
  } = useQuery({
    queryKey: ["detailProduct"],
    queryFn: async () => {
      return getData(params.id);
    },
  });
  const style = useStyle();
  return (
    <div>
      <Helmet>
        <title>Store | Detail</title>
      </Helmet>
      <Stack color={style.primaryTextColor}>
        {isFetching ? <LoadingComponent /> : isSuccess ? <pre>{JSON.stringify(dataState, null, 2)}</pre> : null}
      </Stack>
    </div>
  );
};
