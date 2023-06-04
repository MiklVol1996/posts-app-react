import { useMemo } from "react";


export let useSortedPosts = (filter, posts) => {
  let filteredPosts = useMemo(() => {
    if (filter) {
      return [...posts].sort((a, b) => {
        return typeof a[filter] === 'number' ? a[filter] - b[filter]: a[filter].localeCompare(b[filter]);
      });
    }
    return posts;
  }, [posts, filter]);
  return filteredPosts;
}

export let usePosts = (posts, filter, search) => {
  let sortedPosts = useSortedPosts(filter, posts);
  let filteredSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }, [search, sortedPosts]);
  return filteredSearchedPosts;
}