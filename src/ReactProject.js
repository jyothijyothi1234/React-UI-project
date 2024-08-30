import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

function ReactProj() {
  const [userid, setUserId] = useState("");
  const [task, setTaskId] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState([]);
  const [isFilter, setIsFilter] = useState();


  
      useEffect(() => {

      const filter = value.filter((item) => item.userid !== isFilter);

      setValue(filter);
      setIsFilter("");

    }, [isFilter, value]);

  return (
    <Grid container xs={12}>
      <Grid
        item
        xs={12}
        sx={{
          bgcolor: "chocolate",
          width: "50vw",
          marginLeft: "450px",
          marginTop: "150px",
          marginRight: "450px",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <Typography variant="h5" component="h5">
          UserId
        </Typography>
        <br />

        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          onChange={(e) => setUserId(e.target.value)}
          width={"70vw"}
        />
        <br />
        <br />

        <Typography variant="h5" component="h5">
          Task
        </Typography>
        <br />

        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          onChange={(e) => setTaskId(e.target.value)}
        />
        <br />
        <br />

        <Typography variant="h5" component="h5">
          Description
        </Typography>
        <br />

        <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={5}
          defaultValue=""
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />

        <Button
          variant="contained"
          sx={{ width: "50px", height: "40px" }}
          onClick={() => setValue([...value, { userid, task, description }])}
        >
          ADD
        </Button>
      </Grid>

      <Grid Container xs={12}>
        <Heading />

        {value.map((item) => (
          <h3>
            <Card
              userid={item.userid}
              task={item.task}
              description={item.description}
              setIsFilter={setIsFilter}
            />
          </h3>
        ))}
      </Grid>
    </Grid>
  );
}

function Heading() {
  return (
    <Grid
      Container
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "100px",
        marginLeft: "150px",
        marginRight: "150px",
        paddingBottom: "40px",
        paddingTop: "30px",
        bgcolor: "green",
      }}
    >
      <Typography variant="h5" component="h5">
        UserId
      </Typography>

      <Typography variant="h5" component="h5">
        Task
      </Typography>

      <Typography variant="h5" component="h5">
        Description
      </Typography>

      <Typography variant="h5" component="h5">
        Remove
      </Typography>
    </Grid>
  );
}

function Card(Props) {
  return (
    <Grid
      Container
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "space-around",
        marginLeft: "150px",
        marginRight: "150px",
        paddingTop: "50px",
        paddingBottom: "50px",
        bgcolor: "green",
      }}
    >
      <h3>{Props.userid}</h3>
      <h3>{Props.task}</h3>
      <h3>{Props.description}</h3>
      <Button
        variant="contained"
        sx={{
          bgcolor: "red",
          height: "20px",
          width: "70px",
          marginTop: "20px",
        }}
        onClick={() => Props.setIsFilter(Props.userid)}
      >
        close
      </Button>
    </Grid>
  );
}

export default ReactProj;
