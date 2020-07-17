import { configure } from '@storybook/ember';
import '@storybook/addon-console';
// import { addDecorator } from '@storybook/ember';
import { withInfo } from '@storybook/addon-info';
// import { withPaddings } from 'storybook-addon-paddings';

// addDecorator(withInfo);
// addDecorator(withPaddings);

function loadStories() {
  // require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
