import { POST_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
import { markdownToHtml } from '../../utils/markdown-to-html';

export const getPost = async (slug: string | string[]): Promise<PostData> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POST_URL}?slug=${slugString}`;

  const [jsonPost] = await fetchJson<PostData[]>(url);

  if (!jsonPost) return jsonPost;

  const content = await markdownToHtml(jsonPost.content);

  return { ...jsonPost, content };
};
