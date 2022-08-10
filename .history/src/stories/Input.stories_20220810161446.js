import Input from "../components/Input";

// object to define our story
export default {
  title: "Components/Input",
  component: Input,
  //   define component arguments types
  argTypes: { handleClick: { action: "handleClick" } },
};

// create a template to be used in each example of the Input
const Template = (args) => <Input {...args} />;

/**
 * *define list of example for the component (storiess)
 */
/***
 * * stories for colors
 */
// copy the template using bind
export const Text = Template.bind({});

// Red Input arguments
Red.args = {
  label: "Press me",
  backgroundColor: "red",
  size: "md",
};

// copy the template using bind
export const Email = Template.bind({});

// Green Button arguments
Green.args = {
  label: "Press me",
  backgroundColor: "green",
  size: "md",
};

/**
 * * stories for sizes
 */