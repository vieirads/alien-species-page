/**
 * TODO:
 * - [x] create a radio button to change scales from linear to log
 */
import { ResponsiveLine } from "@nivo/line";
import { FormattedMessage } from "react-intl";

import { Context } from "./LanguageWrapper";
import { useContext, useState } from "react";

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const ScatterPlot = ({ data }) => {
  const context = useContext(Context);

  const [scale, setScale] = useState("linear");

  const handleChange = (e) => {
    setScale(e.target.value);
  };

  const minValue = Math.min(
    ...data[context.locale]
      .map((item) => item.data.map((value) => value.y))
      .map((array) => Math.min(...array))
  );

  const maxValue = Math.max(
    ...data[context.locale][2]["data"].map((item) => item.y)
  );

  console.log(minValue);
  console.log(maxValue);

  const logRange = (min, n = 10) =>
    [...Array(n).keys()]
      .map((i) => 10 ** i)
      .filter((value) => value >= min / 10);

  console.log(logRange(minValue, 10));

  return (
    <>
      <FormControl sx={{ marginTop: -3 }}>
        <RadioGroup
          row
          aria-labelledby="scale-radio"
          defaultValue="linear"
          name="radio-buttons-group"
          onChange={handleChange}
          value={scale}
        >
          <FormControlLabel
            value="linear"
            control={<Radio />}
            label="Linear-Linear"
          />
          <FormControlLabel
            value="log"
            control={<Radio />}
            label="Log-Linear"
          />
        </RadioGroup>
      </FormControl>
      <ResponsiveLine
        data={data[context.locale]}
        margin={{ top: 20, right: 40, bottom: 80, left: 70 }}
        xScale={{ type: "point" }}
        yScale={{
          type: scale,
          min: minValue,
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
          legend: (
            <FormattedMessage
              id="dashboard.scatter.xlabel"
              default="Tempo [anos]"
            />
          ),
          legendOffset: 55,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: (
            <FormattedMessage
              id="dashboard.scatter.ylabel"
              default="Ocorrências acumuladas"
            />
          ),
          legendOffset: -65,
          legendPosition: "middle",
          format: scale === "linear" ? ".0s" : ".0e",
          ...(scale === "log" && { tickValues: logRange(minValue, 10) }),
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
    </>
  );
};

export default ScatterPlot;
