import Stack from "../components/Stack";

// object to define our story
export default {
  title: "Components/Stack",
  component: Stack,
  //   define component arguments types
  argTypes: { handleClick: { action: "handleClick" } },
};

// create a template to be used in each example of the Stack
const Template = (args) => <Stack {...args} />;
