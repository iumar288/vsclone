import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: '50ab2830-393d-4cd0-ace4-364531d6e51e',
  login: 'fS1_',
};

export const sampleWithPartialData: IUser = {
  id: 'd745ef29-c4d0-42f8-bd2d-6861db996c1f',
  login: 'u&6G@-c9T\\OL\\[M\\R6\\AhH09',
};

export const sampleWithFullData: IUser = {
  id: 'e084d65a-d414-40b5-a68b-feed83400dc3',
  login: 'i',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
