import Button from "../components/Button";

// object to define our story
export default {
  title: "Button",
  component: Button,
};

// define list of example for the component
export const Red = () => <Button label={"Press me"} backgroundColor={"red"} />;
