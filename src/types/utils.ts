export type AuthorizedBy = 'required' | 'optional' | 'admin';
export interface AuthActions {
  required: () => any;
  optional: () => any;
  admin: () => any;
}
