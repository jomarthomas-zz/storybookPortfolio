import { createCard } from './Card';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = () => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createCard();
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
