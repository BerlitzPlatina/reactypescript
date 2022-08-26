interface IUser {
  id: number,
  name: string,
  is_admin: string,
  city_code?: string,
  email_verified_at: Date,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date
}
export type {
  IUser
}