import { gql } from "@apollo/client";


export const GET_ANIME = gql`
  query getAnime (
    $id: Int
    $page: Int
    $perPage: Int
    $search: String
    $sort: MediaSort
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(id: $id, search: $search, sort: [$sort], type: ANIME) {
        id
        title {
          romaji
          english
        }
        season
        episodes
        duration
        genres
        description
        coverImage {
          extraLarge
          large
          medium
          color
        }
      }
    }
  }
`;


