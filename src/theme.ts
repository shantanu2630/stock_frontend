import { createTheme } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: green[500],
    },
    error:{
      main:red[500]
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          height: "11vh",
          width: "11vw",
          
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          color: "#949494", // your custom color
          fontWeight: 100,
          fontSize:12,
        },
        root:{
            paddingBottom:0,
            marginBottom:0
        }
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          color: "white", // your custom color
          fontSize:12,
          margin:0,
          paddingTop:0,
        },
      },
    },
  },
});
