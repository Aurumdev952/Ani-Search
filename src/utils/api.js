const url = "https://graphql.anilist.co";

export const searchAnime = async (query) => {
    console.log("fetching...", query);
    const data = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
          query ($id: Int, $page: Int, $perPage: Int, $search: String, $sort: MediaSort) {
            Page (page: $page, perPage: $perPage) {
                    pageInfo {
                        total
                        currentPage
                        lastPage
                        hasNextPage
                        perPage
                    }
                    media (id: $id, search: $search, sort: [$sort], type: ANIME) {
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
            }`,
            variables: {
                perPage: 100,
                page: 0,
                sort: "POPULARITY_DESC",
                search: query,
            },
        }),
    });
    return await data.json();
};