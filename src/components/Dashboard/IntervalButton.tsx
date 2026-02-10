import React from "react";
import Stack from "@mui/material/Stack";
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';

interface prop {
  handleSetInterval: React.Dispatch<React.SetStateAction<string | null>>;
  interval : string | null ;
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  gap: '1rem',
  [`& .${toggleButtonGroupClasses.firstButton}, & .${toggleButtonGroupClasses.middleButton}`]:
    {
      borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
      borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
    },
  [`& .${toggleButtonGroupClasses.lastButton}, & .${toggleButtonGroupClasses.middleButton}`]:
    {
      borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
      borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
      borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`,
    },
  [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled}, & .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]:
    {
      borderLeft: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`,
    },
}));

const IntervalButton = ({handleSetInterval,interval}:prop) => {
 

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
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
    onChange: handleAlignment,
    exclusive: true,
  };
  return (
    <Stack sx={{ alignItems: "end" ,mt:3}}>
      
      <StyledToggleButtonGroup
      size="medium"
      
      {...control}
    >
        {children}
      </StyledToggleButtonGroup>
    </Stack>
  );
};

export default IntervalButton;
