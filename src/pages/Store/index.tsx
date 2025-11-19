import { LazyLoadImage } from "@/components/Image";
import { LoadingComponent } from "@/components/LoadingComponent";
import { TableCompo } from "@/components/TableCompo";
import { useStyle } from "@/components/theme";
import { helper } from "@/utils/helper";
import { HStack, RatingGroup, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router";
import { getData } from "./fetching";
type ProductInterface = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const Index = () => {
  const {
    data: products,
    isFetching: fetchingProducts,
    isSuccess: successFetchingProducts,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getData,
  });
  const style = useStyle();
  const columns: object[] = [
    {
      title: "Name",
      key: "title",
      render: (data: ProductInterface) => (
        <Text maxWidth={"300px"} overflow={"hidden"} color={style.primaryTextColor}>
          {data.title}
        </Text>
      ),
    },
    {
      title: "Price",
      key: "price",
      render: (data: ProductInterface) => (
        <Text maxWidth={"300px"} overflow={"hidden"} color={style.primaryTextColor}>
          {helper.convertToBillNumber(data.price)}
        </Text>
      ),
    },
    {
      title: "Description",
      key: "description",
      render: (data: ProductInterface) => (
        <Text maxWidth={"300px"} overflow={"hidden"} whiteSpace={"nowrap"} textOverflow={"ellipsis"}>
          {data.description}
        </Text>
      ),
    },
    {
      title: "Category",
      key: "category",
    },
    {
      title: "Rating",
      key: "rate",
      render: (data: ProductInterface) => (
        <Text maxWidth={"300px"} overflow={"hidden"} color={style.primaryTextColor}>
          {data.rating.rate}
        </Text>
      ),
    },
    {
      title: "Sold",
      key: "count",
      render: (data: ProductInterface) => (
        <Text maxWidth={"300px"} overflow={"hidden"} color={style.primaryTextColor}>
          {data.rating.count}
        </Text>
      ),
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Store</title>
      </Helmet>
      {fetchingProducts ? (
        <LoadingComponent />
      ) : successFetchingProducts ? (
        <div>
          <HStack flexWrap={"wrap"} gap={"32px"} justifyContent={"center"} marginY={"20px"}>
            {products.map((i: ProductInterface) => (
              <Stack
                width={{ base: "100%", sm: "45%", md: "30%", lg: "138px" }}
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                gap={"0px"}
                cursor={"pointer"}
                _hover={{ backgroundColor: style.selectedItem }}
                key={i.id}
              >
                <NavLink to={`${i.id}`}>
                  <LazyLoadImage
                    width={"100%"}
                    aspectRatio={"1/1"}
                    src={i.image}
                    objectFit="cover"
                    objectPosition="center"
                    borderRadius={"4px"}
                    marginBottom={"4px"}
                  />
                  <Text color={style.primaryTextColor}>{i.title}</Text>
                  <Text color={style.primaryTextColor} fontWeight={"bold"}>
                    {helper.convertToBillNumber(i.price)}
                  </Text>
                  <HStack gap={"10px"} color={style.secondaryTextColor}>
                    <HStack gap={"0px"}>
                      <RatingGroup.Root readOnly count={1} defaultValue={1} size="sm" colorPalette={"yellow"}>
                        <RatingGroup.HiddenInput />
                        <RatingGroup.Control />
                      </RatingGroup.Root>
                      <Text fontSize={"12px"}>{i.rating.rate}</Text>
                    </HStack>

                    <Text fontSize={"12px"}>{i.rating.count}</Text>
                  </HStack>
                </NavLink>
              </Stack>
            ))}
          </HStack>

          <TableCompo tableName={"Products"} columns={columns} data={products} />
          <pre style={{ color: style.primaryTextColor }}>{JSON.stringify(products, null, 2)}</pre>
        </div>
      ) : null}
    </div>
  );
};
