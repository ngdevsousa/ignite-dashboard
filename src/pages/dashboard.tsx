import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header/index";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false
});
const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      "2021-04-09T00:00:00.000Z",
      "2021-04-10T00:00:00.000Z",
      "2021-04-11T00:00:00.000Z",
      "2021-04-12T00:00:00.000Z",
      "2021-04-13T00:00:00.000Z"
    ]
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};
const series = [
  {
    name: "series1",
    data: [10, 40, 15, 52, 91]
  }
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text>Subscribers</Text>
            <Chart options={options} series={series} type="area" heigh={160} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text>Entry</Text>
            <Chart options={options} series={series} type="area" heigh={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
