import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proba_2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba_2',
          title: 'Proba_2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proba-2-город-l': IISProba_2ГородLForm,
    'i-i-s-proba-2-улица-l': IISProba_2УлицаLForm,
    'i-i-s-proba-2-город-e': IISProba_2ГородEForm,
    'i-i-s-proba-2-улица-e': IISProba_2УлицаEForm
  },

});

export default translations;
