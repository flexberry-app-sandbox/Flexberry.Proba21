import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProba_2ГородLForm from './forms/i-i-s-proba-2-город-l';
import IISProba_2УлицаLForm from './forms/i-i-s-proba-2-улица-l';
import IISProba_2ГородEForm from './forms/i-i-s-proba-2-город-e';
import IISProba_2УлицаEForm from './forms/i-i-s-proba-2-улица-e';
import IISProba_2ГородModel from './models/i-i-s-proba-2-город';
import IISProba_2УлицаModel from './models/i-i-s-proba-2-улица';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba-2-город': IISProba_2ГородModel,
    'i-i-s-proba-2-улица': IISProba_2УлицаModel
  },

  'application-name': 'Proba_2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba_2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba_2',
          title: 'Proba_2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'proba-2': {
          caption: 'Proba_2',
          title: 'Proba_2',
          'i-i-s-proba-2-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-proba-2-улица-l': {
            caption: 'Улица',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba-2-город-l': IISProba_2ГородLForm,
    'i-i-s-proba-2-улица-l': IISProba_2УлицаLForm,
    'i-i-s-proba-2-город-e': IISProba_2ГородEForm,
    'i-i-s-proba-2-улица-e': IISProba_2УлицаEForm
  },

});

export default translations;
