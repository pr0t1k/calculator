import React from 'react';
import InputText from './InputText';

export default {
  title: 'InputText',
  component: InputText,
  argTypes: {
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  textColor:"white",
  backgroundColor:"#050404",
};