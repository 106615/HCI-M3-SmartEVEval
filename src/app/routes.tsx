import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { StartScreen } from "./screens/StartScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { ClimateScreen } from "./screens/ClimateScreen";
import { MusicScreen } from "./screens/MusicScreen";
import { MapScreen } from "./screens/MapScreen";
import { ChargingScreen } from "./screens/ChargingScreen";
import { MenuScreen } from "./screens/MenuScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { Navigate } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: StartScreen,
  },
  {
    path: "/app",
    Component: RootLayout,
    children: [
      { index: true, Component: () => <Navigate to="/app/home" replace /> },
      { path: "home", Component: HomeScreen },
      { path: "climate", Component: ClimateScreen },
      { path: "music", Component: MusicScreen },
      { path: "map", Component: MapScreen },
      { path: "charging", Component: ChargingScreen },
      { path: "menu", Component: MenuScreen },
      { path: "settings", Component: SettingsScreen },
    ],
  },
]);
