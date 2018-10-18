import { InjectionToken } from "@angular/core";
import { DataConfig } from './data-config';

export const DATA = new InjectionToken<DataConfig>('monkData');
export const DATA_OBJECT: DataConfig = {
  title: 'hello world',
  contact: ''
};

export const DATA_STRING = 'is good world'