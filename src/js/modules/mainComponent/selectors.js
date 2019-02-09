export const getConfigModules = state => state.config.modules;
export const getConfigActiveModules = state => state.config.activeBlocks;
export const getChatState = state => state.config.activeBlocks.chat;
export const getCurrentUser = state => state.currentUser;
export const getUsers = state => state.users;
export const getTranslations = state => state.language;
export const getPlatformLanguages = state => state.config.platformLanguage.languages;
export const getCurrentLanguage = state => state.config.platformLanguage.currentLanguage;

