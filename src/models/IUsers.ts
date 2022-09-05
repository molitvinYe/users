export interface IUsers {
  success: boolean,
  page: number,
  total_pages: number,
  total_users: number,
  count: number,
  links: {
      next_url: string | null,
      prev_url: string | null
  },
  users: IUser[]
}

export interface IUser {
  id: string,
  name: string,
  email: string,
  phone: string,
  position: string,
  position_id: string,
  registration_timestamp: number,
  photo: string
}
