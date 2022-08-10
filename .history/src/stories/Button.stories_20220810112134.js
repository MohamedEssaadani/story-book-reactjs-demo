import Button from "../components/Button";

// object to define our story
export default {
  title: "Button",
  component: Button,
};

// create a template to be used in each example of the button
const Template = (args) => <Button {...args} />;

/**
 * 
 * @returns 
 */
// copy t
export const Red = () => <Button label={"Press me"} backgroundColor="red" />;
