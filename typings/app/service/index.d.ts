// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMongoRbac from '../../../app/service/MongoRbac';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    mongoRbac: ExportMongoRbac;
    test: ExportTest;
  }
}
