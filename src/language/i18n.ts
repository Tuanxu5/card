import { createI18n } from 'vue-i18n';
import vietnam from './vietnam.json';
import english from './english.json';

const messages = {
    vn: vietnam,
    en: english
};

const i18n = createI18n({
   locale: 'en',
   messages,
});

export default i18n;