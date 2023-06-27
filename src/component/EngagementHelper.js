import { formattedDate } from "./helper";

export const engagementMessageOverTimeChartOptions = (
  messageCountList,
  channels
) => {
  const updatedMessageList = messageCountList.map((items) => ({
    ...items,
    count: Number(items.count),
  }));

  const filteredChannels = channels.filter((channel) =>
    updatedMessageList.some((data) => data.channelId === channel.id)
  );

  const filterMessageData = updatedMessageList.filter((data) =>
    channels.some((channel) => channel.id === data.channelId)
  );

  const seriesData = filteredChannels.map((channel) => {
    const filteredData = filterMessageData.filter(
      (data) => data.channelId === channel.id
    );

    const data = filteredData.map((data) => ({
      x: new Date(data.timeBucket).getTime(),
      y: data.count,
    }));

    return { name: channel.name, data };
  });

  const options = {
    chart: {
      type: "spline",
      backgroundColor: "#22222c",
      height: 600,
      borderRadius: 20,
    },
    title: {
      text: "Messages Engagement",
      style: {
        color: "white",
      },
    },
    xAxis: {
      labels: {
        style: {
          color: "white",
        },
        formatter: function () {
          return formattedDate(this.value);
        },
      },
    },
    yAxis: {
      className: "highcharts-color-0",
      labels: {
        style: {
          color: "white",
        },
      },
      gridLineColor: "transparent",
      title: {
        text: "Message Count",
      },
    },
    legend: {
      backgroundColor: "white",
    },
    tooltip: {
      borderRadius: 4,
      borderWidth: 1,
      shadow: false,
      formatter: function () {
        const convertedDate = formattedDate(this.x);
        return `${this.series.name} <br /> ${this.y} messages on ${convertedDate}`;
      },
    },
    series: seriesData,
  };

  return options;
};
