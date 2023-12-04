import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proba-2.caption'),
          title: i18n.t('forms.application.sitemap.proba-2.title'),
          children: [{
            link: 'i-i-s-proba-2-город-l',
            caption: i18n.t('forms.application.sitemap.proba-2.i-i-s-proba-2-город-l.caption'),
            title: i18n.t('forms.application.sitemap.proba-2.i-i-s-proba-2-город-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-proba-2-улица-l',
            caption: i18n.t('forms.application.sitemap.proba-2.i-i-s-proba-2-улица-l.caption'),
            title: i18n.t('forms.application.sitemap.proba-2.i-i-s-proba-2-улица-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})