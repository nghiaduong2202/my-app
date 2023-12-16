export const room = {
  roomId: "1",
  roomName: "living Room",
  device: [
    { deviceId: "1", deviceName: "light", sensorID: "light-1" },
    { deviceId: "2", deviceName: "fan", sensorID: "fan-1" },
    { deviceId: "3", deviceName: "door", sensorID: "door-1" },
    { deviceId: "4", deviceName: "door", sensorID: "door-2" },
  ],
};

export const sensor = [
  {
    Id: "light-1",
    status: Boolean(true),
    data: 60,
  },
  {
    Id: "fan-1",
    status: Boolean(false),
    data: 0,
  },
  {
    Id: "door-1",
    status: true,
    data: 100,
  },
  {
    Id: "door-2",
    status: Boolean(false),
    data: 0,
  },
];
