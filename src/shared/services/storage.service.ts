import { Constants } from '@constants';

import { Language } from '@generated';

enum StorageName {
  LANGUAGE = '@language'
}

class StorageService {
  async clear() {
    return localStorage.clear();
  }

  async getLanguage(): Promise<Language> {
    try {
      const value = await localStorage.getItem(StorageName.LANGUAGE) as Language;

      return value;

    } catch(error) {
      return Constants.DEFAULT_LANGUAGE;
    }
  }

  async setLanguage(value: Language) {
    return localStorage.setItem(StorageName.LANGUAGE, value);
  }
    
}

const instance = new StorageService();

export default instance;