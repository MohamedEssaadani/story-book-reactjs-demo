import Stack from "../components/Stack";

// object to define our story
export default {
  title: "Components/Stack",
  component: Stack,
  argTypes:{
    childrenNumber: {type: "number", }
  }
};

// create a template to be used in each example of the Stack
const Template = ({ childrenNumber, args }) => <Stack {...args} />;

/**
 * *define list of example for the component (storiess)
 */
