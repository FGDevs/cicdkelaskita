interface FormatMedia {
  ext: string,
  hash: string,
  height: number,
  mime: string,
  name: string,
  path?: string,
  size: number,
  url: string,
  width: number
}

export interface Media {
  alternativeText: string,
  caption: string,
  created_at: string,
  ext: string,
  format: [FormatMedia]
  hash: string,
  height: number,
  id: string | number,
  mime: string,
  name: string,
  previewUrl?: string,
  provider: string,
  provider_metadata: string | null,
  size: number,
  updated_at: string,
  url: string,
  width: number,
}

export interface Kelas {
  title: string,
  slug: string,
  description: string,
  price: number,
  is_webbinar: boolean,
  rekankita_id: number,
  category_id: number,
  topik_id: Topic,
  type: number,
  level: number,
  like_count: number,
  student_count: number,
  view_count: number,
  rating: number,
  banner_path?: Media,
  preview_path?: Media,
  instructor_id?: Instructor,
  sections?: Object,
  short_description: string,
  ulasan?: [Ulasan],
}

export interface Instructor {
  avatar_path: Media,
  cover_path: Media,
  created_at: string,
  created_time?: string,
  description: string,
  id: number | string,
  name: string,
  profit_charge: number,
  published_at: string,
  role: string,
  signature_path: Media
  state: number,
  updated_at: string,
  updated_time?: string
  user_id?: string | number
}

export interface Topic {
  title: string,
  icon_path: Media,
  state: number,
}

export interface User {
  username: string,
  email: string,
  provider: string,
  password: string,
  resetPasswordToken: string,
  confirmationToken: string,
  confirmed: boolean,
  blocked: boolean,
  avatar: Media,
}

export interface Ulasan {
  comment: string,
  rating: number,
  state: number,
  kelas_id: Kelas,
  user_id: User,
}