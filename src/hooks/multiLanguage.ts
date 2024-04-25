import { useTranslation } from 'react-i18next';

export function useMultiLang() {
    const { t, i18n } = useTranslation();
    return { t, i18n };
}