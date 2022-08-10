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
export const text = Template.bind({});

// Red Input arguments
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

/**
 * * stories for sizes
 */

export const Small = Template.bind({});

Small.args = {
  label: "Press me",
  backgroundColor: "green",
  size: "sm",
};

export const Medium = Template.bind({});

Medium.args = {
  label: "Press me",
  backgroundColor: "green",
  size: "md",
};

export const Large = Template.bind({});

Large.args = {
  label: "Press me",
  backgroundColor: "green",
  size: "lg",
};
