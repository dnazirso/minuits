import MinUi from "../core/MinUi";

const modalFrames = MinUi.Css.Add("keyframes", {
  blur: {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 0.5,
    },
  },
});

const Modal = MinUi.Css.Use("class", (theme) => ({
  overlay: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "fixed",
    opacity: 0.5,
    backgroundColor: theme.chart?.main,
    animation: `${modalFrames.blur} 500ms cubic-bezier(0.4, 0, 0.2, 1) 1`,
  },
  card: {
    position: "fixed",
    display: "none",
    flexDirection: "column",
    top: "33%",
    left: "50%",
    minWidth: "10%",
    minHeight: "10%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "auto",
    transform: "translate(-50%, -50%)",
    padding: theme.spacing?.main,
    border: `${theme.borderWidth?.main}px solid ${theme.chart?.borders?.main}`,
    borderRadius: theme.radius?.main,
    backgroundColor: theme.chart?.main,
  },
  close: {
    display: "flex",
    justifyContent: "flex-end",
  },
  content: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  active: {
    display: "flex",
  },
}));

export default Modal;
