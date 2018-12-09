// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportRbac from '../../../app/service/Rbac';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    rbac: ExportRbac;
    test: ExportTest;
  }
}
