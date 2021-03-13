import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export default function Loading({ size }) {
  const theme = useContext(ThemeContext);

  const Loadingstyle = {
    width: "100%",
    height: "100%",
    color: theme.colors.Text,
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div style={Loadingstyle} >
      <FontAwesomeIcon icon="hourglass-start" size={ size } spin />
    </div>
  );
}
