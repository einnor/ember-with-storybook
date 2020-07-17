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
const icons = ['', 'anchor', 'bullseye', 'coffee', 'dragon', 'eye', 'female', 'gem', 'headphones', 'icons'];
stories.add('Themes', () => ({
  template: hbs`
    <Button
      @type={{type}}
      @outline={{outline}}
      @disabled={{disabled}}
      @block={{block}}
      @icon={{icon}}
      onClick={{onClick}}
    >
      {{if outline 'Outlined'}} {{if disabled 'Disabled'}} {{label}}
    </Button>
  `,
  context: {
    label: text('label', 'Button'),
    type: select('type', themes, 'primary'),
    icon: select('icon', icons, ''),
    outline: boolean('outline', false),
    disabled: boolean('disabled', false),
    block: boolean('block', false),
    onClick() {
      console.log('Normal log');
      console.warn('Warn log');
      console.error('Error log');
    },
  }
}));
