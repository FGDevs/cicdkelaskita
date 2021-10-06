import { gql } from '@apollo/client';

export const GET_KELAS_PREVIEW = gql`
  query Kelas($slug: String!) {
    kelas(where: {slug: $slug}) {
      title,
      short_description,
      description,
      price,
      is_webbinar,
      level,
      like_count,
      student_count,
      view_count,
      rating,
      preview_path {
        url,
      },
      instructor_id {
        name,
        description,
        role,
      },
      sections {
        title,
        materials {
          title,
          type,
          file {
            url,
          },
        },
      },
      topik_id {
        title,
      },
      ulasan {
        user_id {
          username,
          avatar {
            url,
          },
        },
        rating,
        comment,
      }
    }
  }
`

export const GET_KELAS_PATH = gql`
  query Kelas {
    kelas {
      slug,
      instructor_id {
        name,
      },
    },
  },
`


export const GET_KELAS_CARD = gql`
  query Kelas {
    kelas {
      slug,
      title,
      price,
      topik_id {
        title,
      },
      instructor_id {
        name,
      },
      banner_path {
        alternativeText,
        width,
        height,
        url
      },
      ulasan {
        rating,
      },
    }
  }
`
