import config from './config';

export default class Data {
  api(
    path,
    method = 'GET',
    body = null,
    requiresAuth = false,
    credentials = null
  ) {
    const url = config.apiBaseUrl + path;

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    if (requiresAuth) {
      const encodedCredentials = btoa(
        `${credentials.emailaddress}:${credentials.password}`
      );
      options.headers['Authorization'] = `Basic ${encodedCredentials}`;
    }
    return fetch(url, options);
  }

  async getUser(emailaddress, password) {
    const response = await this.api(`/users`, 'GET', null, true, {
      emailaddress,
      password,
    });
    if (response.status === 200) {
      return response.json().then((data) => data);
    } else if (response.status === 401) {
      return null;
    } else {
      throw new Error();
    }
  }

  async createUser(user) {
    const response = await this.api('/users', 'POST', user);
    if (response.status === 201) {
      return [];
    } else if (response.status === 400) {
      return response.json().then((data) => {
        return data.errors;
      });
    } else {
      throw new Error();
    }
  }

  async createCourse(course, emailaddress, password) {
    const response = await this.api('/courses', 'POST', course, true, {
      emailaddress,
      password,
    });
    if (response.status === 200) {
      return response.json().then((data) => data);
    } else if (response.status === 401) {
      return null;
    } else {
      throw new Error();
    }
  }

  async deleteCourse(course) {
    const response = await this.api(
      `/api/courses/delete/:id`,
      'DELETE',
      null,
      true,
      {
        course,
      }
    );
    if (response.status === 200) {
      return response.json().then((data) => data);
    } else if (response.status === 401) {
      return null;
    } else {
      throw new Error();
    }
  }

  async courseUpdate(course) {
    const response = await this.api('/courses/:id', 'PUT', null, true, {
      course,
    });
    if (response.status === 200) {
      return response.json().then((data) => data);
    } else if (response.status === 401) {
      return null;
    } else {
      throw new Error();
    }
  }

  //   async getCourse(course) {
  //     const response = await this.api(`/api/courses`, 'GET', null, true, {
  //       course,
  //     });
  //     if (response.status === 200) {
  //       return response.json().then((data) => data);
  //     } else if (response.status === 401) {
  //       return null;
  //     } else {
  //       throw new Error();
  //     }
  //   }
}
