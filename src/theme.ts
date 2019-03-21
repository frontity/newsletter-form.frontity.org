import { css } from "styled-components";

type TextAreaProps = {
  resize: boolean;
  fontSize: string;
};

export default {
  global: {
    breakpoints: {
      small: {
        edgeSize: {
          none: "0px",
          hair: "1px",
          xxsmall: "3px",
          xsmall: "5px",
          small: "10px",
          medium: "20px",
          large: "40px",
          xlarge: "80px"
        }
      }
    },
    colors: {
      background: "transparent",
      brand: "#1f38c5",
      "accent-1": "#1f38c5",
      "accent-2": "#1f38c5",
      "accent-3": "#1f38c5",
      "accent-4": "#1f38c5",
      "status-ok": "#7dd72d",
      "status-error": "#ea5a35",
      focus: "rgba(31, 56, 197, 0.24)",
      text: {
        light: "#0c112b"
      }
    },
    edgeSize: {
      none: "0px",
      hair: "1px",
      xxsmall: "3px",
      xsmall: "5px",
      small: "10px",
      medium: "20px",
      large: "40px",
      xlarge: "80px",
      responsiveBreakpoint: "small"
    },
    font: {
      family: "Poppins, sans-serif",
      size: "16px"
    },
    input: {
      weight: "normal"
    }
  },
  text: {
    medium: {
      size: "16px",
      height: "24px"
    }
  },
  heading: {
    level: {
      "1": {
        medium: {
          size: "32px",
          height: "50px"
        }
      },
      "2": {
        medium: {
          size: "32px",
          height: "40px"
        }
      },
      "3": {
        medium: {
          size: "20px",
          height: "24px"
        }
      },
      "4": {
        medium: {
          size: "14px",
          height: "22px"
        }
      }
    },
    extend: css`
      ${({ as }: { as: string }) =>
        as === "h4"
          ? `
        letter-spacing: 1.5px;
        text-transform: uppercase;
      `
          : ""}
    `,
    responsiveBreakpoint: "none"
  },
  formField: {
    border: "none",
    margin: { bottom: "0" },
    label: {
      margin: { vertical: "0", horizontal: "0", bottom: "8px" }
    },
    extend: css`
      & > label[for] {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
      }
    `
  },
  textInput: {
    extend: css`
      background: rgba(31, 56, 197, 0.08);
      border: 2px solid rgba(31, 56, 197, 0.24);
      border-radius: 8px;
      box-sizing: border-box;
    `
  },
  button: {
    border: {
      width: "0",
      radius: "8px"
    },
    padding: {
      horizontal: "20px",
      vertical: "16px"
    },
    extend: css`
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
    `
  },
  textArea: {
    extend: css`
      background: rgba(31, 56, 197, 0.08);
      border: 2px solid rgba(31, 56, 197, 0.24);
      border-radius: 8px;
      box-sizing: border-box;
      font-weight: normal;
      ${({ resize }: TextAreaProps) =>
        resize === false ? "resize: none;" : ""}
      ${({ fontSize }: TextAreaProps) =>
        fontSize ? `font-size: ${fontSize};` : ""}
    `
  },
  radioButton: {
    size: "16px"
  },
  grommet: {
    extend: css`
      label {
        font-size: 16px;
        line-height: 24px;
        font-weight: normal;
      }
    `
  }
};
