// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportPermission from '../../../app/model/Permission';
import ExportRole from '../../../app/model/Role';

declare module 'egg' {
  interface IModel {
    Permission: ReturnType<typeof ExportPermission>;
    Role: ReturnType<typeof ExportRole>;
  }
}
