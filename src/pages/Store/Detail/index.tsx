import LoadingComponent from "@/components/LoadingComponent";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";

const index = () => {
  const params = useParams();
  const {
    data: dataState,
    isFetching,
    isSuccess,
  } = useQuery({
    queryKey: ["detailProduct"],
    queryFn: async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
      return res.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Store | Detail</title>
      </Helmet>
      {isFetching ? <LoadingComponent /> : isSuccess ? <pre>{JSON.stringify(dataState, null, 2)}</pre> : null}
    </div>
  );
};

export default index;
