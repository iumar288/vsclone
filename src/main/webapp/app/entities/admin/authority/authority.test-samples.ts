import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '98df315c-3916-4c0c-8bcf-3f7f38f489cb',
};

export const sampleWithPartialData: IAuthority = {
  name: '1cb3be3c-14fd-422c-9ee5-231e63241f84',
};

export const sampleWithFullData: IAuthority = {
  name: '8cdc3090-fcbe-4641-8fb9-985f5a9afa3b',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
