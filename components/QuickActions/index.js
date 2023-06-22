import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  allOn,
  allOff,
  handleAllLightsOnToggle,
  handleAllLightsOffToggle,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          handleAllLightsOffToggle();
        }}
        disabled={allOff}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          handleAllLightsOnToggle();
        }}
        disabled={allOn}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
