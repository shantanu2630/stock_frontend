import React from "react";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

interface prop {
  handleSetInterval: React.Dispatch<React.SetStateAction<string | null>>;
  interval : string | null ;
}

const IntervalButton = ({handleSetInterval,interval}:prop) => {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    handleSetInterval(newAlignment);
  };

  const children = [
    <ToggleButton value="1D" key="1D">
      1D
    </ToggleButton>,
    <ToggleButton value="1M" key="1M">
      1M
    </ToggleButton>,
    <ToggleButton value="3M" key="3M">
      3M
    </ToggleButton>,
    <ToggleButton value="6M" key="6M">
      6M
    </ToggleButton>,
    <ToggleButton value="1Y" key="1Y">
      1Y
    </ToggleButton>,
  ];

  const control = {
    value: interval,
    onChange: handleChange,
    exclusive: true,
  };
  return (
    <Stack sx={{ alignItems: "end" ,mt:3}}>
      <ToggleButtonGroup size="medium" {...control} >
        {children}
      </ToggleButtonGroup>
    </Stack>
  );
};

export default IntervalButton;
