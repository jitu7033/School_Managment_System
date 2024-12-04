import React from 'react'
import { SpeedDial, SpeedDialAction, styled } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

const SpeedDailTemplate = ({actions}) => {
    return (
        <CustomSpeedDial
            arialabel = "SpeedDial playground example"
            icon={<TuneIcon/>}
            direction="left"
        >
            {actions.map((action) => {
                <SpeedDialAction
                    key={action.icon}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={action.action}
                />
            })}
        </CustomSpeedDial>
    );
};
export default SpeedDailTemplate;

const CustomSpeedDial = styled(SpeedDial)`
    .MuiSpeedDial-fab {
    background-color: #032803;
    
    &:hover {
      background-color: green;
    }
  }
`;