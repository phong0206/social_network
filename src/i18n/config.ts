import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Nhập resource bundles cho các ngôn ngữ bạn muốn hỗ trợ
import en from '~/i18n/locales/en/translation.json'
import vi from '~/i18n/locales/vi/translation.json';

// Initialize i18next with options
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en,
            },
            vi: {
                translation: vi,
            },
        },
        lng: "en", // Ngôn ngữ mặc định khi khởi động
        fallbackLng: "en", // Ngôn ngữ dự phòng
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;