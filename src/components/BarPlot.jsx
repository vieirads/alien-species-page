import { ResponsiveBar } from "@nivo/bar";

const BarPlot = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={["Invasivo", "Nativo", "Total"]}
    indexBy="continent"
    margin={{ top: 20, right: 40, bottom: 130, left: 70 }}
    padding={0.3}
    groupMode="grouped"
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={["#e41a1d", "#367fb8", "#4daf4a"]}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -90,
      legend: "Continente",
      legendPosition: "middle",
      legendOffset: 115,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Total de ocorrências",
      legendPosition: "middle",
      legendOffset: -50,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "top-left",
        direction: "column",
        justify: false,
        translateX: 10,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default BarPlot;
