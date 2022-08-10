import Button from "../components/Button";

// object to define our story
export default {
  title: "Components/Button",
  component: Button,
  //   define component arguments types
  argTypes: { handleClick: { action: "handleClick" } },
};

// create a template to be used in each example of the button
const Template = (args) => <Button {...args} />;
