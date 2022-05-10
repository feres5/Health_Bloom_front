import React from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { styled, alpha } from "@mui/material/styles";

import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

const PREFIX = "Demo";

const classes = {
  container: `${PREFIX}-container`,
  text: `${PREFIX}-text`,
};

const StyledDiv = styled("div")(({ theme }) => ({
  [`&.${classes.container}`]: {
    display: "flex",
    marginBottom: theme.spacing(2),
    justifyContent: "flex-end",
  },
  [`& .${classes.text}`]: {
    ...theme.typography.h6,
    marginRight: theme.spacing(2),
  },
}));
function FrontCalandar(props) {
  const [data, setData] = React.useState([]);

  const getAppointments = async () => {
    console.log("aa : ", props.info);
    const reponse = await fetch(
      `http://127.0.0.1:3002/api/appointments/${props.info}`
    );
    const infoRes = await reponse.json();
    var d = [];
    console.log(infoRes);
    infoRes.map((item, index) => {
      d.push({
        title: "",
        id: index,
        startDate: item.startDate,
        endDate: item.endDate,
        rRule: item.rRule,
        exDate: item.exDate,
        allDay: item.allDay,
        roomId: item.roomId,
        member: item.member,
      });
    });
    setData(d);
  };
  React.useEffect(() => {
    getAppointments();
  }, []);

  return (
    <Paper>
      {console.log(data)}

      <Scheduler data={data} height={660}>
        <ViewState />
        <WeekView startDayHour={8} endDayHour={19} />
        <Toolbar />
        <DateNavigator />
        <Appointments />
      </Scheduler>
    </Paper>
  );
}
export default FrontCalandar;
