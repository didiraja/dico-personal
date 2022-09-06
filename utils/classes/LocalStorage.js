const IS_CLIENT = typeof window !== 'undefined';
import DateClass from './Date';

const dateClass = new DateClass();

export default class LocalStorageClass {
  constructor() {
    if (IS_CLIENT) this.root = window.localStorage;
  }

  GetData(storageItem) {
    if (IS_CLIENT) {
      const storageAsData = window.localStorage.getItem(storageItem);

      // console.log(storageAsData);

      if (!storageAsData) return [];

      const dataAsJSON = JSON.parse(storageAsData);

      return dataAsJSON;
    }
  }

  _DataAsStringToStorage(storageItem, storageData) {
    const dataAsString = JSON.stringify(storageData);

    window.localStorage.setItem(storageItem, dataAsString);

    console.log('📋 Storage salvo!');
  }

  SetData(storageItem, storageData) {
    if (IS_CLIENT) {
      const actualStorage = this.GetData(storageItem);

      // console.log(actualStorage);

      // Is Storage Empty ???
      if (!actualStorage || actualStorage.length < 1) {
        return this._DataAsStringToStorage(storageItem, [storageData]);
      }

      // Is Today already on Storage ???
      const indexToday = actualStorage.findIndex(item => {
        const itemParsed = dateClass.parseISO(item.date);

        return dateClass.isToday(itemParsed);
      });

      // If Yes, substitute
      if (indexToday >= 0) {
        // console.log(indexToday);

        let newStorage = actualStorage;

        newStorage[0] = storageData;

        // console.log(newStorage);

        return this._DataAsStringToStorage(storageItem, newStorage);
      }

      // If Not, put in front of list

      const newStorage = [storageData, ...actualStorage];

      // console.log(newStorage);

      this._DataAsStringToStorage(storageItem, newStorage);
    }
  }

  RemoveData(storageItem) {
    if (IS_CLIENT) {
      window.localStorage.removeItem(storageItem);

      console.log('✔ removido do Storage');
    }
  }
}
