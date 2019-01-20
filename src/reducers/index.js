import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import admin from './adminReducer';
import employeesList from './employeesListReducer';

const rootReducer = combineReducers({
  register, login, admin, employeesList
});

export default rootReducer;