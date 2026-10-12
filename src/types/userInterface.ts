export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  wishlist?: string[];
  role: { _id: string; name: string }
}
