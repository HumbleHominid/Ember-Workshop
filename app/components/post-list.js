import Component from '@ember/component';

export default Component.extend({
  classNames: [ "card-columns" ],

  modalInfo: null,

  actions: {
    updateModalInfo(info) {
      this.set('modalInfo', info);
    },
    nullifyModalInfo() {
      this.set('modalInfo', null);
    }
  }
});
