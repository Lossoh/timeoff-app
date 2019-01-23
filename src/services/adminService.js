import { getCookie } from '../utils/cookies';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': getCookie('token')
};

const id = getCookie('id');

export const addEmployeeService = (request) => {
  const EMPLOYEE_API_ENDPOINT = 'http://localhost:3000/api/v1/admin/new';

  const parameters = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(request)
  };

  return fetch(EMPLOYEE_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      return error;
    });
};

export const fetchEmployeesService = () => {
  const FETCH_EMPLOYEES_ENDPOINT = 'http://localhost:3000/api/v1/admin/list';

  const parameters = {
    method: 'GET',
    headers: headers
  };

  return fetch(FETCH_EMPLOYEES_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    }).catch(error => {
      return error;
    });
};

export const fetchEmployeesCountService = () => {
  const FETCH_EMPLOYEES_COUNT_ENDPOINT = `http://localhost:3000/api/v1/dashboard/count?id=${id}`;

  const parameters = {
    method: 'GET',
    headers: headers
  };

  return fetch(FETCH_EMPLOYEES_COUNT_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      return error;
    });
};

export const fetchOnlineEmployeesService = () => {
  const FETCH_ONLINE_EMPLOYEES_ENDPOINT = `http://localhost:3000/api/v1/dashboard/online?id=${id}`;

  const parameters = {
    method: 'GET',
    headers: headers
  };

  return fetch(FETCH_ONLINE_EMPLOYEES_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      return error;
    });
};

export const fetchActivitiesService = () => {
  const FETCH_ACTIVITIES_ENDPOINT = `http://localhost:3000/api/v1/dashboard/activities?id=${id}`;

  const parameters = {
    method: 'GET',
    headers: headers
  }

  return fetch(FETCH_ACTIVITIES_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      console.log(error);
      return error;
    })
};










