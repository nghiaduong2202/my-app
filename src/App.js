import { React } from "react";
import { Space, Flex, Typography, Switch, Progress, Button } from "antd";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import WindPowerIcon from "@mui/icons-material/WindPower";
import DoorFrontIcon from "@mui/icons-material/DoorFront";

import { room, sensor } from "./data";
function App() {
  const handleButton = () => {
    console.log(sensor);
  };

  return (
    <Space wrap style={{ width: "100%", padding: "1%", marginTop: "2%" }}>
      {room.device.map((devices) => {
        let icon;
        let sensorData = sensor.find((sensors) => {
          return sensors.Id === devices.sensorID;
        });
        if (devices.deviceName === "light") {
          icon = (
            <TipsAndUpdatesIcon
              fontSize="large"
              style={{ marginLeft: "10%" }}
            />
          );
        } else if (devices.deviceName === "fan") {
          icon = (
            <WindPowerIcon fontSize="large" style={{ marginLeft: "10%" }} />
          );
        } else {
          icon = (
            <DoorFrontIcon fontSize="large" style={{ marginLeft: "10%" }} />
          );
        }

        return (
          <>
            <Space.Compact
              direction="vertical"
              style={{
                width: "100%",
                height: "150px",
                border: "2px solid black",
                borderRadius: "10px",
                padding: "3%",
                backgroundColor: "#f2f0f0",
                margin: "0 10%",
                display: "block",
              }}>
              <Space style={{ display: "block", height: "90px" }}>
                <Flex
                  justify="space-between"
                  align="flex-center"
                  style={{ padding: "1%", width: "100%" }}>
                  <Space direction="vertical">
                    {icon}
                    <Typography>Light</Typography>
                  </Space>
                  <Space>
                    <Switch
                      defaultChecked={sensorData.status}
                      onClick={(checked, event) => {
                        sensorData.status = !sensorData.status;
                      }}
                    />
                  </Space>
                </Flex>
              </Space>
              <Space style={{ height: "20px" }}>
                <Progress
                  percent={50}
                  showInfo={false}
                  style={{ display: "block", width: "16vw" }}
                />
              </Space>
            </Space.Compact>
            <div style={{ width: "1rem" }}></div>
          </>
        );
      })}

    </Space>
  );
}

export default App;
