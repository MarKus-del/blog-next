import { POST_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const countAllPost = async (query = ''): Promise<string> => {
  const url = `${POST_URL}/count?${query}`;
  const numberOfPosts = await fetchJson<string>(url);
  return numberOfPosts;
};
