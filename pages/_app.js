import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

const initialLights = [
  { name: "Living Room", isOn: false, id: 1 },
  { name: "Kitchen", isOn: false, id: 2 },
  { name: "Bedroom", isOn: false, id: 3 },
  { name: "Bathroom", isOn: false, id: 4 },
  { name: "Garage", isOn: false, id: 5 },
  { name: "Porch", isOn: false, id: 6 },
  { name: "Garden", isOn: false, id: 7 },
  { name: "Office", isOn: false, id: 8 },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  const turnedOnLights = lights.filter((light) => light.isOn === true);
  const sumOfTurnedOnLights = turnedOnLights.length;

  const isDimmed = sumOfTurnedOnLights < 1 ? true : false;

  function handleToggle(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleAllLightsOnToggle() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  function handleAllLightsOffToggle() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  const allOn = sumOfTurnedOnLights === lights.length ? true : false;
  const allOff = sumOfTurnedOnLights === 0 ? true : false;

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleToggle={handleToggle}
        sumOfTurnedOnLights={sumOfTurnedOnLights}
        allOn={allOn}
        allOff={allOff}
        handleAllLightsOnToggle={handleAllLightsOnToggle}
        handleAllLightsOffToggle={handleAllLightsOffToggle}
      />
    </Layout>
  );
}
