// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const { PublicBlog, PublicPost, PublicComment, PrivateBlog, PrivatePost, PrivateComment } =
  initSchema(schema);

export { PublicBlog, PublicPost, PublicComment, PrivateBlog, PrivatePost, PrivateComment };
