import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { channels, messageCountList } from "./mock";
import { engagementMessageOverTimeChartOptions } from "./EngagementHelper";

const EngagementMessagesOverTime = () => {
  const options = engagementMessageOverTimeChartOptions(
    messageCountList,
    channels
  );

  return (
    <>
      <div className="main-container">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
};

export default EngagementMessagesOverTime;
