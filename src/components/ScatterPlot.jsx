import { ResponsiveLine } from "@nivo/line";

const ScatterPlot = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 20, right: 40, bottom: 60, left: 70 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "log",
      min: "auto",
      max: "auto",
      stacked: false,
      reverse: false,
    }}
    yFormat=" >-.0f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 45,
      legend: "Tempo [anos]",
      legendOffset: 45,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Ocorrências acumuladas",
      legendOffset: -55,
      legendPosition: "middle",
      tickValues: [
        1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000,
      ],
      format: ".1e",
    }}
    colors={["#e41a1d", "#367fb8", "#4daf4a"]}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "top-left",
        direction: "column",
        justify: false,
        translateX: 10,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default ScatterPlot;
