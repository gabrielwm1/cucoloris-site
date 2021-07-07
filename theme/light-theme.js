import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  typography: {
    semiBold: "Montserrat-SemiBold, Arial",
    medium: "Montserrat-Medium, Arial",
    bold: "Montserrat-Bold, Arial",
    regular: "Montserrat-Regular, Arial",
  },
  palette: {
    primary: {
      main: "#30B4FF",
      white: "#FFFFFF",
      lightGrey: "#00000029",
      lightBlue: "#30B4FF",
      black: "#000000",
      darkGrey: "#7F7F7F",
      red: "#FF524C",
      mutedRed: "#fcb3b1",
      yellow: "#FFCB00",
      mutedYellow: "#f7e6a1",
      lightGreen: "#19D819",
      lightButtonGreen: "#c3f7c3",
    },
    secondary: {
      main: "#FAB513",
    },
  },

  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: "Montserrat-Regular, Arial",
      },
      body2: {
        fontFamily: "Montserrat-Regular, Arial",
      },
    },
    MuiFormControl: {
      root: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15,

        "@media (max-width: 900px)": {
          flexDirection: "column",
        },

        "& label": {
          fontWeight: 700,
          alignSelf: "center",

          "@media (max-width: 900px)": {
            marginBottom: 10,
            alignSelf: "start",
          },
        },
      },
    },
    MuiInputBase: {
      root: {
        backgroundColor: "#F3F3F3",
        height: 47,
        paddingLeft: 25,
        fontSize: "1rem",
        width: "60vw",
        marginLeft: "auto",

        "@media (max-width: 900px)": {
          width: "100%",
        },
      },
      inputMultiline: {
        padding: "0 25px",
      },
      multiline: {
        minHeight: 47,
        height: "auto",
      },
    },
    MuiContainer: {
      maxWidthLg: {
        "@media (min-width: 1065px)": {
          maxWidth: "1065px",
        },
      },
    },
    MuiSelect: {
      outlined: {
        padding: 0,
        display: "flex",
        alignItems: "center",
      },
      select: {
        "& :focus": {
          backgroundColor: "transparent",
        },
        paddingLeft: 20,
      },
      selectMenu: {
        height: "100%",
      },
    },
  },
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 769,
    lg: 1200,
    xl: 1920,
  },
});

export default Theme;
