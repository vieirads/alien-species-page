import { ResponsivePie } from "@nivo/pie";
import { format } from "d3-format";

import { Context } from "./LanguageWrapper";
import { useContext } from "react";

const PiePlot = ({ data, angle }) => {
  const context = useContext(Context);

  return (
    <ResponsivePie
      data={data[context.locale]}
      margin={{ top: 40, right: 20, bottom: 100, left: 20 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      startAngle={angle}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={3}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="white"
      colors={["#367fb8", "#e41a1d"]}
      sortByValue={false}
      arcLabel={(d) => format(".2s")(`${d.value}`)}

      // legends={[
      //   {
      //     anchor: "bottom",
      //     direction: "row",
      //     justify: false,
      //     translateX: 0,
      //     translateY: 56,
      //     itemsSpacing: 0,
      //     itemWidth: 100,
      //     itemHeight: 18,
      //     itemTextColor: "#999",
      //     itemDirection: "left-to-right",
      //     itemOpacity: 1,
      //     symbolSize: 18,
      //     symbolShape: "circle",
      //     effects: [
      //       {
      //         on: "hover",
      //         style: {
      //           itemTextColor: "#000",
      //         },
      //       },
      //     ],
      //   },
      // ]}
    />
  );
};

export default PiePlot;
