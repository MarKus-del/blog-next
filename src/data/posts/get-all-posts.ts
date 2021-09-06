import { POST_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPost = async (query = ''): Promise<PostData[]> => {
  const url = `${POST_URL}?${query}`;
  const posts = await fetchJson<PostData[]>(url);
  return posts;
};
