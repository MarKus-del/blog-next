import { POST_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPost = async (): Promise<PostData[]> => {
  const posts = await fetchJson<PostData[]>(POST_URL);
  return posts;
};
