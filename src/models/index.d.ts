import { ModelInit, MutableModel, PersistentModelConstructor } from '@aws-amplify/datastore';

type PublicBlogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type PublicPostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type PublicCommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type PrivateBlogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type PrivatePostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type PrivateCommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

export declare class PublicBlog {
  readonly id: string;
  readonly name: string;
  readonly posts?: (PublicPost | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PublicBlog, PublicBlogMetaData>);
  static copyOf(
    source: PublicBlog,
    mutator: (
      draft: MutableModel<PublicBlog, PublicBlogMetaData>
    ) => MutableModel<PublicBlog, PublicBlogMetaData> | void
  ): PublicBlog;
}

export declare class PublicPost {
  readonly id: string;
  readonly blogID: string;
  readonly comments?: (PublicComment | null)[] | null;
  readonly title: string;
  readonly PublicBlog?: PublicBlog | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PublicPost, PublicPostMetaData>);
  static copyOf(
    source: PublicPost,
    mutator: (
      draft: MutableModel<PublicPost, PublicPostMetaData>
    ) => MutableModel<PublicPost, PublicPostMetaData> | void
  ): PublicPost;
}

export declare class PublicComment {
  readonly id: string;
  readonly postID: string;
  readonly comment: string;
  readonly PublicPost?: PublicPost | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PublicComment, PublicCommentMetaData>);
  static copyOf(
    source: PublicComment,
    mutator: (
      draft: MutableModel<PublicComment, PublicCommentMetaData>
    ) => MutableModel<PublicComment, PublicCommentMetaData> | void
  ): PublicComment;
}

export declare class PrivateBlog {
  readonly id: string;
  readonly name: string;
  readonly posts?: (PrivatePost | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PrivateBlog, PrivateBlogMetaData>);
  static copyOf(
    source: PrivateBlog,
    mutator: (
      draft: MutableModel<PrivateBlog, PrivateBlogMetaData>
    ) => MutableModel<PrivateBlog, PrivateBlogMetaData> | void
  ): PrivateBlog;
}

export declare class PrivatePost {
  readonly id: string;
  readonly blogID: string;
  readonly comments?: (PrivateComment | null)[] | null;
  readonly title: string;
  readonly PrivateBlog?: PrivateBlog | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PrivatePost, PrivatePostMetaData>);
  static copyOf(
    source: PrivatePost,
    mutator: (
      draft: MutableModel<PrivatePost, PrivatePostMetaData>
    ) => MutableModel<PrivatePost, PrivatePostMetaData> | void
  ): PrivatePost;
}

export declare class PrivateComment {
  readonly id: string;
  readonly postID: string;
  readonly comment: string;
  readonly PrivatePost?: PrivatePost | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PrivateComment, PrivateCommentMetaData>);
  static copyOf(
    source: PrivateComment,
    mutator: (
      draft: MutableModel<PrivateComment, PrivateCommentMetaData>
    ) => MutableModel<PrivateComment, PrivateCommentMetaData> | void
  ): PrivateComment;
}
