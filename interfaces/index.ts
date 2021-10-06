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

export interface Materi {
  id: string | number,
  title: string,
  content: string,
  duration: string,
  order: number,
  state: number,
  file: Media,
  type: [
    'video',
    'text',
    'pdf',
    'test'
  ],
}

export interface Section {
  id: string | number,
  title: string,
  description: string,
  order: number,
  state: number,
  materials: Materi[],
  kelas_id?: Kelas,
  rekankita_id?: Object,
}

export interface Kelas {
  id: string | number,
  title: string,
  slug: string,
  description: string,
  short_description: string,
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
  sections?: Section[],
  ulasan?: Ulasan[],
}


export interface Instructor {
  id: string | number,
  avatar_path: Media,
  cover_path: Media,
  created_at: string,
  created_time?: string,
  description: string,
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
  id: string | number,
  title: string,
  icon_path: Media,
  state: number,
}

export interface User {
  id: string | number,
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
  id: string | number,
  comment: string,
  rating: number,
  state: number,
  kelas_id: Kelas,
  user_id: User,
}