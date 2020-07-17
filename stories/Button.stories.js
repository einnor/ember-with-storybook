import { storiesOf } from '@storybook/ember';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { hbs } from 'ember-cli-htmlbars';

const stories = storiesOf('Button', module)
  .addDecorator(withKnobs);

stories.add('Default', () => ({
  template: hbs`
  <Button>{{label}}</Button>
`,
context: {
  label: text('label', 'Default Button'),
},
}));

const themes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
stories.add('Themes', () => ({
  template: hbs`
    <Button @type={{type}} @outline={{outline}} @disabled={{disabled}}>{{type}} {{label}}</Button>
  `,
  context: {
    label: text('label', 'button'),
    type: select('type', themes, 'primary'),
    outline: boolean('outline', false),
    disabled: boolean('disabled', false),
  }
}));
