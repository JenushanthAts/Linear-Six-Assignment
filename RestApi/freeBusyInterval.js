const axios = require("axios");

async function getBusyIntervals(apiKey, calendarId, timeMin, timeMax) {
  const url = `https://www.googleapis.com/calendar/v3/freeBusy?key=${apiKey}`;

  const requestBody = {
    timeMin: new Date(timeMin).toISOString(),
    timeMax: new Date(timeMax).toISOString(),
    timeZone: "UTC",
    items: [{ id: calendarId }],
  };

  try {
    const response = await axios.post(url, requestBody);
    if (response.data.calendars && response.data.calendars[calendarId]) {
      return response.data.calendars[calendarId].busy;
    } else {
      console.error("No data found");
      return [];
    }
  } catch (error) {
    console.error("Error fetching busy intervals:", error);
    throw error;
  }
}

const apiKey = "AIzaSyBK5zKY9w_kFFNDloTKicKCDcUPBVzuyQI";
const calendarId =
  "16ec8dc491a0929266af20e02ba2290dc39eb9ab3da7fc935279f2d5f09cd1b0@group.calendar.google.com";
const timeMin = "2024-11-13T00:00:00Z";
const timeMax = "2024-11-30T23:59:59Z";

getBusyIntervals(apiKey, calendarId, timeMin, timeMax)
  .then((busyIntervals) => {
    console.log("Busy intervals:", busyIntervals);
  })
  .catch((error) => {
    console.error("Error", error);
  });
