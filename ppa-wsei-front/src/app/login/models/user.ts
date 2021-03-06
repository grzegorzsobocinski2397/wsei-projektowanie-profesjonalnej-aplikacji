import { UserType } from './user-type';

export interface User {
  /**
   * Unique ID.
   */
  id: string;
  /**
   * Authorization token.
   */
  token: string;
  /**
   * User first name.
   */
  name: string;
  /**
   * What permissions this user has.
   */
  type: UserType;
}
