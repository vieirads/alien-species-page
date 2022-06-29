/**
 * TODO:
 * - create a radio button to change scales from linear to log
 */
import { ResponsiveBar } from "@nivo/bar";
import { FormattedMessage } from "react-intl";

import { Context } from "./LanguageWrapper";
import { useContext } from "react";

const BarPlot = ({ data }) => {
  const context = useContext(Context);

  const invasive = context.locale === "en-US" ? "Invasive" : "Invasivo";
  const native = context.locale === "en-US" ? "Native" : "Nativo";
  const continent = context.locale === "en-US" ? "continent" : "continente";

  return (
    <ResponsiveBar
      data={data[context.locale]}
      keys={[invasive, native, "Total"]}
      indexBy={continent}
      margin={{ top: 20, right: 30, bottom: 120, left: 70 }}
      padding={0.2}
      groupMode="grouped"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={["#e41a1d", "#367fb8", "#4daf4a"]}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -45,
        legend: (
          <FormattedMessage id="dashboard.bar.xlabel" default="Continente" />
        ),
        legendPosition: "middle",
        legendOffset: 90,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: (
          <FormattedMessage
            id="dashboard.bar.ylabel"
            default="Total de ocorrências"
          />
        ),
        legendPosition: "middle",
        legendOffset: -50,
        format: ">-.0s",
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          legend: [1, 2, 3],
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
};

export default BarPlot;
