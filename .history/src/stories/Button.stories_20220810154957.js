import Button from "../components/Button";

// object to define our story
export default {
  title: "Button",
  component: Button,
  //   define component arguments types
  argTypes: { handleClick: { action: "handleClick" } },
};

// create a template to be used in each example of the button
const Template = (args) => <Button {...args} />;

/**
 * *define list of example for the component (storiess)
 */
// copy the template using bind
export const Red = Template.bind({});

// Red Button arguments
Red.args = {
  label: "Press me",
  backgroundColor: "red",
  size: "md",
};

// copy the template using bind
export const Green = Template.bind({});

// Green Button arguments
Green.args = {
  label: "Press me",
  backgroundColor: "green",
  size: "md",
};
