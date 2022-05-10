import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled, alpha } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
// data
import { Patients } from "./data/tasks";
import { resourcesData } from "./data/resources";
import axios from "axios";
import jwt_decode from "jwt-decode";
// end data
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Resources,
  WeekView,
  DayView,
  MonthView,
  DateNavigator,
  TodayButton,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  Toolbar,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
  ViewSwitcher,
  DragDropProvider,
  CurrentTimeIndicator,
} from "@devexpress/dx-react-scheduler-material-ui";

/*****************************   start Styles     ****************************  */

const PREFIX = "Demo";
const classes = {
  todayCell: `${PREFIX}-todayCell`,
  weekendCell: `${PREFIX}-weekendCell`,
  today: `${PREFIX}-today`,
  weekend: `${PREFIX}-weekend`,
  checkBoxContainer: `${PREFIX}-checkBoxContainer`,
  textField: `${PREFIX}-textField`,
};

const StyledWeekViewTimeTableCell = styled(WeekView.TimeTableCell)(
  ({ theme }) => ({
    [`&.${classes.todayCell}`]: {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.14),
      },
      "&:focus": {
        backgroundColor: alpha(theme.palette.primary.main, 0.16),
      },
    },
    [`&.${classes.weekendCell}`]: {
      backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
      "&:hover": {
        backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
      },
      "&:focus": {
        backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
      },
    },
  })
);

const StyledWeekViewDayScaleCell = styled(WeekView.DayScaleCell)(
  ({ theme }) => ({
    [`&.${classes.today}`]: {
      backgroundColor: alpha(theme.palette.primary.main, 0.16),
    },
    [`&.${classes.weekend}`]: {
      backgroundColor: alpha(theme.palette.action.disabledBackground, 0.06),
    },
  })
);

const TimeTableCell = (props) => {
  const { startDate } = props;
  const date = new Date(startDate);

  if (date.getDate() === new Date().getDate()) {
    return (
      <StyledWeekViewTimeTableCell {...props} className={classes.todayCell} />
    );
  }
  if (date.getDay() === 0 || date.getDay() === 6) {
    return (
      <StyledWeekViewTimeTableCell {...props} className={classes.weekendCell} />
    );
  }
  return <StyledWeekViewTimeTableCell {...props} />;
};

const DayScaleCell = (props) => {
  const { startDate, today } = props;

  if (today) {
    return <StyledWeekViewDayScaleCell {...props} className={classes.today} />;
  }
  if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    return (
      <StyledWeekViewDayScaleCell {...props} className={classes.weekend} />
    );
  }
  return <StyledWeekViewDayScaleCell {...props} />;
};
const StyledGrid = styled(Grid)(({ theme: { spacing } }) => ({
  [`&.${classes.checkBoxContainer}`]: {
    paddingTop: spacing(1),
    paddingBottom: spacing(1),
    paddingLeft: spacing(4),
  },
}));
const StyledTextField = styled(TextField)(({ theme: { spacing } }) => ({
  [`&.${classes.textField}`]: {
    marginRight: spacing(4),
    marginLeft: spacing(1),
    width: "120px",
  },
}));
const ShadeCellsCheckBox = ({ shadePreviousCells, handleChange }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={shadePreviousCells}
        onChange={() => handleChange("shadePreviousCells")}
        color="primary"
      />
    }
    label="Shade previous cells"
  />
);

const ShadePreviousAppointmentsCheckBox = ({
  shadePreviousAppointments,
  handleChange,
}) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={shadePreviousAppointments}
        onChange={() => handleChange("shadePreviousAppointments")}
        color="primary"
      />
    }
    label="Shade previous appointments"
  />
);
const CheckBoxContainer = ({
  shadePreviousCells,
  shadePreviousAppointments,
  handleCheckboxChange,
}) => (
  <StyledGrid
    item
    container
    direction="column"
    className={classes.checkBoxContainer}
    xs={6}
  >
    <ShadeCellsCheckBox
      shadePreviousCells={shadePreviousCells}
      handleChange={handleCheckboxChange}
    />
    <ShadePreviousAppointmentsCheckBox
      shadePreviousAppointments={shadePreviousAppointments}
      handleChange={handleCheckboxChange}
    />
  </StyledGrid>
);

const UpdateIntervalBox = ({ updateInterval, onValueChange }) => (
  <Grid item container xs={6} alignItems="center" justifyContent="flex-end">
    <Typography>Update every:</Typography>
    <StyledTextField
      className={classes.textField}
      variant="outlined"
      onChange={(event) => onValueChange(event.target.value)}
      value={updateInterval / 1000}
      type="number"
      InputProps={{
        endAdornment: <InputAdornment position="end">s</InputAdornment>,
      }}
    />
  </Grid>
);

/*****************************   end Styles     ****************************  */

/****************************************************  start Drag and Drop  *********************************************** */
const dragDisableIds = new Set([3, 8, 10, 12]);
const allowDrag = ({ id }) => !dragDisableIds.has(id);
const appointmentComponent = (props) => {
  if (allowDrag(props.data)) {
    return <Appointments.Appointment {...props} />;
  }
  return (
    <Appointments.Appointment
      {...props}
      style={{ ...props.style, cursor: "not-allowed" }}
    />
  );
};
/****************************************************  end Drag and Drop  *********************************************** */
var token = localStorage.getItem("user_info");
var decoded = jwt_decode(token);
var l = [];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      ressources: [
        {
          fieldName: "roomId",
          title: "urgency",
          instances: resourcesData,
        },
        {
          fieldName: "members",
          title: "Members",
          instances: Patients,
          allowMultiple: true,
        },
      ],
      adam: [],
      currentViewName: "work-week",

      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined,
      shadePreviousCells: true,
      shadePreviousAppointments: true,
      updateInterval: 10000,
    };

    this.currentViewNameChange = (currentViewName) => {
      this.setState({ currentViewName });
    };
    this.currentDateChange = (currentDate) => {
      this.setState({ currentDate });
    };
    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointment = this.changeEditingAppointment.bind(this);

    axios
      .get(process.env.REACT_APP_BackEnd_url+`/api/appointments/${decoded.restUserInfo}`)
      .then((response) => {
        var d = [];
        this.setState({ adam: response.data });
        response.data.map((item, index) => {
          d.push({
            title: item.title,
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
        this.setState({ data: d });
      });

    axios
      .get(
          process.env.REACT_APP_BackEnd_url+`/doctor/getDoctorPatients/${decoded.restUserInfo}`
      )
      .then((response) => {
        response.data.map((item, index) => {
          l.push({
            text: item.FirstName + " " + item.LastName,
            id: index + 1, //item._id,
            color: "#E91E63",
            _id: item._id,
          });
        });
        this.setState({
          ressources: [
            {
              fieldName: "roomId",
              title: "urgency",
              instances: resourcesData,
            },
            {
              fieldName: "members",
              title: "Members",
              instances: l,
            },
          ],
        });
      });

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleUpdateIntervalChange = (nextValue) => {
      this.setState({
        updateInterval: nextValue * 1000,
      });
    };
  }

  handleCheckboxChange(stateField) {
    const { [stateField]: fieldToChange } = this.state;
    this.setState({
      [stateField]: !fieldToChange,
    });
  }

  changeAddedAppointment(addedAppointment) {
    this.setState({ addedAppointment });
  }
  changeAppointmentChanges(appointmentChanges) {
    this.setState({ appointmentChanges });
  }

  changeEditingAppointment(editingAppointment) {
    this.setState({ editingAppointment });
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];

        axios.post(process.env.REACT_APP_BackEnd_url+"/api/appointments/", {
          title: data[data.length - 1].title,
          _doctor: decoded.restUserInfo,
          _patient: l[data[data.length - 1].members - 1],
          startDate: data[data.length - 1].startDate,
          endDate: data[data.length - 1].endDate,
          rRule: data[data.length - 1].rRule,
          exDate: data[data.length - 1].exDate,
          allDay: data[data.length - 1].allDay,
          roomId: data[data.length - 1].roomId,
          members: data[data.length - 1].members,
        });
      }
      if (changed) {
        data = data.map((appointment) => {
          if (changed[appointment.id]) {
            console.log(appointment.id);
            let myId = this.state.adam[appointment.id]._id;
            axios.put(
                process.env.REACT_APP_BackEnd_url+`/api/appointments/${myId}`,
              changed[appointment.id]
            );
            return { ...appointment, ...changed[appointment.id] };
          } else return appointment;
        });
      }
      if (deleted !== undefined) {
        let myId = this.state.adam[deleted]._id;
        axios.delete(process.env.REACT_APP_BackEnd_url+`/api/appointments/${myId}`);
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      return { data };
    });
  }
  render() {
    const {
      addedAppointment,
      appointmentChanges,
      editingAppointment,
      shadePreviousCells,
      updateInterval,
      shadePreviousAppointments,
    } = this.state;
    const data = this.state.data;
    const resources = this.state.ressources;
    return (
      <React.Fragment>
        <Grid container>
          <CheckBoxContainer
            shadePreviousCells={shadePreviousCells}
            shadePreviousAppointments={shadePreviousAppointments}
            handleCheckboxChange={this.handleCheckboxChange}
          />
        </Grid>
        <Paper>
          <Scheduler data={data} height={660}>
            <ViewState
              defaultCurrentViewName="Week"
              onCurrentDateChange={this.currentDateChange}
            />
            <EditingState
              onCommitChanges={this.commitChanges}
              addedAppointment={addedAppointment}
              onAddedAppointmentChange={this.changeAddedAppointment}
              appointmentChanges={appointmentChanges}
              onAppointmentChangesChange={this.changeAppointmentChanges}
              editingAppointment={editingAppointment}
              onEditingAppointmentChange={this.changeEditingAppointment}
            />

            <DayView startDayHour={9} endDayHour={18} />

            <WeekView
              startDayHour={9}
              endDayHour={19}
              timeTableCellComponent={TimeTableCell}
              dayScaleCellComponent={DayScaleCell}
            />

            <WeekView
              name="work-week"
              displayName="Work Week"
              excludedDays={[0, 6]}
              startDayHour={9}
              endDayHour={19}
            />
            <MonthView />

            <DayView />

            <AllDayPanel />
            <EditRecurrenceMenu />
            <ConfirmationDialog />
            <Appointments appointmentComponent={appointmentComponent} />
            <AppointmentTooltip showCloseButton showOpenButton />
            <AppointmentForm />
            <Resources data={resources} mainResourceName="roomId" />
            <DragDropProvider allowDrag={allowDrag} />

            <Toolbar />
            <DateNavigator />
            <TodayButton />

            <ViewSwitcher />
            <CurrentTimeIndicator
              shadePreviousCells={shadePreviousCells}
              shadePreviousAppointments={shadePreviousAppointments}
              updateInterval={updateInterval}
            />
          </Scheduler>
        </Paper>
      </React.Fragment>
    );
  }
}
