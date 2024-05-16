import React from "react";
import { TextField, Grid, Paper } from "@mui/material";

const BookingForm: React.FC = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={4}>
        <Paper elevation={3}>
          <TextField
            fullWidth
            label="From"
            variant="outlined"
            placeholder="Where from"
            InputLabelProps={{
              shrink: true,
            }}
            select
            SelectProps={{
              native: true,
            }}
            inputProps={{
              list: "from-opts",
            }}
          >
            <datalist id="from-opts">
              <option>Chhatrapati Shivaji Maharaj International Airport - BOM</option>
              <option>Ninoy Aquino International Airport - MNL</option>
              <option>Narita International Airport - NRT</option>
              <option>Don Mueang International Airport - DMK</option>
              <option>Tan Son Nhat International Airport - SGN</option>
              <option>Kempegowda International Airport - BLR</option>
              <option>Singapore Changi Airport - SIN</option>
            </datalist>
          </TextField>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3}>
          <TextField
            fullWidth
            label="To"
            variant="outlined"
            placeholder="Where to"
            InputLabelProps={{
              shrink: true,
            }}
            select
            SelectProps={{
              native: true,
            }}
            inputProps={{
              list: "to-opts",
            }}
          >
            <datalist id="to-opts">
              <option>Chhatrapati Shivaji Maharaj International Airport - BOM</option>
              <option>Ninoy Aquino International Airport - MNL</option>
              <option>Narita International Airport - NRT</option>
              <option>Don Mueang International Airport - DMK</option>
              <option>Tan Son Nhat International Airport - SGN</option>
              <option>Kempegowda International Airport - BLR</option>
              <option>Singapore Changi Airport - SIN</option>
            </datalist>
          </TextField>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3}>
          <TextField
            fullWidth
            label="Departure"
            type="datetime-local"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Paper>
      </Grid>
      {/* {trip[0]?.tripType === "round-way" && (
        <Grid item xs={12} md={4}>
          <Paper elevation={3}>
            <TextField
              fullWidth
              label="Return"
              type="datetime-local"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Paper>
        </Grid>
      )} */}
    </Grid>
  );
};

export default BookingForm;
