import Component from '@ember/component';

export default Component.extend({
  type: 'primary',
  disabled: false,
  outline: false,
  block: false,
  actions: {
    onClick() {
      console.log('Clicked');
    },
  },
});
