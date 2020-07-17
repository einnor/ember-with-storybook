import Component from '@ember/component';

export default Component.extend({
  type: 'primary',
  icon: null,
  disabled: false,
  outline: false,
  block: false,
  actions: {
    onClick() {
      console.log('Clicked');
    },
  },
});
