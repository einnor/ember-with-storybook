import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const Default = () => ({
    template: hbs`
    <Button>{{label}}</Button>
  `,
  context: {
    label: text('label', 'Default Button'),
  },
});

export const Theme = () => ({
    template: hbs`
    <Button @type={{type}}>{{label}}</Button>
  `,
  context: {
    label: text('label', 'primary button'),
    type: text('@type', 'primary'),
  },
});