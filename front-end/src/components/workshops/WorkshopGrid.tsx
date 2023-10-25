import { Box, Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import WorkshopItem from "./WorkshopItem";
import { useQuery } from "react-query";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import ErrorItem from "../ErrorItem";

const WorkshopGrid = () => {
  const router = useRouter();

  const { isLoading, error, data } = useQuery("workshops", async () => {
    const responce = await fetch("http://localhost:8000/workshops", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authentication: `Bearer ${Cookies.get("token")}`,
      },
    });

    return responce.json();
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (data.error) {
    return <ErrorItem error={data.error} />;
  }

  return (
    <Flex>
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        {data &&
          data.map((workshop: any) => {
            return (
              <Box height="300px" key={workshop._id}>
                <WorkshopItem data={workshop} />
              </Box>
            );
          })}
      </SimpleGrid>
    </Flex>
  );
};

export default WorkshopGrid;
