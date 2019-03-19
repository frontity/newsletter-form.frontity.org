import { css } from "styled-components";

type TextAreaProps = {
  resize: boolean;
  fontSize: string;
};

export default {
  global: {
    colors: {
      background: "transparent",
      brand: "#1f38c5",
      "accent-1": "#1f38c5",
      "accent-2": "#1f38c5",
      "accent-3": "#1f38c5",
      "accent-4": "#1f38c5",
      "status-ok": "#7dd72d",
      "status-error": "#ea5a35",
      focus: "rgba(31, 56, 197, 0.24)"
    },
    font: {
      family: "Poppins, sans-serif"
    }
  },
  font: {
    size: "16px",
    height: "24px"
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
      }
      &.uppercase > label[for] {
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
