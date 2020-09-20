import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Home1 from "./Home1";

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const Example = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "music", title: "Music", icon: "home" },
    { key: "profile", title: "Profile", icon: "face-profile" },
    {
      key: "albums",
      title: "Pay & Transfer",
      icon: "arrow-top-right-bottom-left-bold",
    },
    { key: "recents", title: "Recents", icon: "history" },
    { key: "more", title: "More", icon: "menu" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: () => <Home1 />,
    profile: () => <Text>Profile</Text>,
    albums: AlbumsRoute,
    recents: () => <Text>Recents</Text>,
    more: () => <Text>Recents</Text>,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: "white" }}
      activeColor={"#024731"}
    />
  );
};

export default Example;
