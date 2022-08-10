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

// Text Input arguments
Text.args = {
  type: "text",
  size: "md",
};

// copy the template using bind
export const n = Template.bind({});

// n Button arguments
n.args = {
  type: "n",
  size: "md",
};

/**
 * * stories for sizes
 */
