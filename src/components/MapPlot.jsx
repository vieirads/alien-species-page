// import { ResponsiveGeoMap } from "@nivo/geo";
import { ResponsiveChoropleth } from "@nivo/geo";

import worldCountries from "../data/worldCountries";
// import worldContinents from "../data/worldContinents";

// console.log(worldContinents.features);

// const MapPlot = () => (
//   <ResponsiveGeoMap
//     features={worldCountries.features}
//     margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
//     projectionTranslation={[0.5, 0.5]}
//     projectionRotation={[0, 0, 0]}
//     fillColor="#eeeeee"
//     borderWidth={0.5}
//     borderColor="#333333"
//     enableGraticule={true}
//     graticuleLineColor="#666666"
//   />
// );

const MapPlot = ({ data }) => (
  <ResponsiveChoropleth
    data={data}
    features={worldCountries.features}
    margin={{ top: 100, right: 0, bottom: 100, left: 0 }}
    colors="nivo"
    domain={[0, 1000000]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionTranslation={[0.5, 0.5]}
    projectionRotation={[0, 0, 0]}
    enableGraticule={true}
    graticuleLineColor="#dddddd"
    borderWidth={0.5}
    borderColor="#152538"
    legends={[
      {
        anchor: "bottom-left",
        direction: "column",
        justify: true,
        translateX: 170,
        translateY: -50,
        itemsSpacing: 0,
        itemWidth: 94,
        itemHeight: 18,
        itemDirection: "left-to-right",
        itemTextColor: "#444444",
        itemOpacity: 0.85,
        symbolSize: 18,
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000000",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default MapPlot;
