import axios from 'axios';
import DateClass from '../classes/Date';

// @schema
// {
//   date: DateClass.workingWeekStart(),
//   crossfit: number,
//   dinner: number,
// }

class RequestClass {
  constructor() {
    this.url = 'https://us-east-1.aws.data.mongodb-api.com/app/data-njmii/endpoint/data/v1/action';
    this.config = {
      method: 'post',
      url: `${this.url}/findOne`,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'WyAfZmapYmx6jZipliOsa80x6P5fT4wU7igaV1HwroHCH9a2095czAom2kjXIhx7',
      },
    };
    this.db = {
      dataSource: 'personal-app',
      database: 'personal',
      collection: 'app',
    };
    this.date = DateClass.formatISO(DateClass.workingWeekStart());
  }

  _request(config = {}) {
    return axios({
      ...this.config,
      ...config,
    });
  }

  findOne() {
    const data = {
      data: {
        ...this.db,
        filter: {
          date: this.date,
        },
      },
    };

    return this._request(data);
  }

  replaceOne(updatedData) {
    const data = {
      url: `${this.url}/replaceOne`,
      data: {
        ...this.db,
        filter: {
          date: this.date,
        },
        replacement: {
          date: this.date,
          ...updatedData,
        },
      },
    };

    return this._request(data);
  }
}

export default new RequestClass();
