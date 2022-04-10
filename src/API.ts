/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePublicBlogInput = {
  id?: string | null;
  name: string;
  _version?: number | null;
};

export type ModelPublicBlogConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelPublicBlogConditionInput | null> | null;
  or?: Array<ModelPublicBlogConditionInput | null> | null;
  not?: ModelPublicBlogConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type PublicBlog = {
  __typename: 'PublicBlog';
  id: string;
  name: string;
  posts?: ModelPublicPostConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ModelPublicPostConnection = {
  __typename: 'ModelPublicPostConnection';
  items: Array<PublicPost | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type PublicPost = {
  __typename: 'PublicPost';
  id: string;
  blogID: string;
  comments?: ModelPublicCommentConnection | null;
  title: string;
  PublicBlog?: PublicBlog | null;
  content?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ModelPublicCommentConnection = {
  __typename: 'ModelPublicCommentConnection';
  items: Array<PublicComment | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type PublicComment = {
  __typename: 'PublicComment';
  id: string;
  postID: string;
  comment: string;
  PublicPost?: PublicPost | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type UpdatePublicBlogInput = {
  id: string;
  name?: string | null;
  _version?: number | null;
};

export type DeletePublicBlogInput = {
  id: string;
  _version?: number | null;
};

export type CreatePublicPostInput = {
  id?: string | null;
  blogID: string;
  title: string;
  content?: string | null;
  _version?: number | null;
};

export type ModelPublicPostConditionInput = {
  blogID?: ModelIDInput | null;
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelPublicPostConditionInput | null> | null;
  or?: Array<ModelPublicPostConditionInput | null> | null;
  not?: ModelPublicPostConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdatePublicPostInput = {
  id: string;
  blogID?: string | null;
  title?: string | null;
  content?: string | null;
  _version?: number | null;
};

export type DeletePublicPostInput = {
  id: string;
  _version?: number | null;
};

export type CreatePublicCommentInput = {
  id?: string | null;
  postID: string;
  comment: string;
  _version?: number | null;
};

export type ModelPublicCommentConditionInput = {
  postID?: ModelIDInput | null;
  comment?: ModelStringInput | null;
  and?: Array<ModelPublicCommentConditionInput | null> | null;
  or?: Array<ModelPublicCommentConditionInput | null> | null;
  not?: ModelPublicCommentConditionInput | null;
};

export type UpdatePublicCommentInput = {
  id: string;
  postID?: string | null;
  comment?: string | null;
  _version?: number | null;
};

export type DeletePublicCommentInput = {
  id: string;
  _version?: number | null;
};

export type CreatePrivateBlogInput = {
  id?: string | null;
  name: string;
  _version?: number | null;
};

export type ModelPrivateBlogConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelPrivateBlogConditionInput | null> | null;
  or?: Array<ModelPrivateBlogConditionInput | null> | null;
  not?: ModelPrivateBlogConditionInput | null;
};

export type PrivateBlog = {
  __typename: 'PrivateBlog';
  id: string;
  name: string;
  posts?: ModelPrivatePostConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ModelPrivatePostConnection = {
  __typename: 'ModelPrivatePostConnection';
  items: Array<PrivatePost | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type PrivatePost = {
  __typename: 'PrivatePost';
  id: string;
  blogID: string;
  comments?: ModelPrivateCommentConnection | null;
  title: string;
  PrivateBlog?: PrivateBlog | null;
  content?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ModelPrivateCommentConnection = {
  __typename: 'ModelPrivateCommentConnection';
  items: Array<PrivateComment | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type PrivateComment = {
  __typename: 'PrivateComment';
  id: string;
  postID: string;
  comment: string;
  PrivatePost?: PrivatePost | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type UpdatePrivateBlogInput = {
  id: string;
  name?: string | null;
  _version?: number | null;
};

export type DeletePrivateBlogInput = {
  id: string;
  _version?: number | null;
};

export type CreatePrivatePostInput = {
  id?: string | null;
  blogID: string;
  title: string;
  content?: string | null;
  _version?: number | null;
};

export type ModelPrivatePostConditionInput = {
  blogID?: ModelIDInput | null;
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelPrivatePostConditionInput | null> | null;
  or?: Array<ModelPrivatePostConditionInput | null> | null;
  not?: ModelPrivatePostConditionInput | null;
};

export type UpdatePrivatePostInput = {
  id: string;
  blogID?: string | null;
  title?: string | null;
  content?: string | null;
  _version?: number | null;
};

export type DeletePrivatePostInput = {
  id: string;
  _version?: number | null;
};

export type CreatePrivateCommentInput = {
  id?: string | null;
  postID: string;
  comment: string;
  _version?: number | null;
};

export type ModelPrivateCommentConditionInput = {
  postID?: ModelIDInput | null;
  comment?: ModelStringInput | null;
  and?: Array<ModelPrivateCommentConditionInput | null> | null;
  or?: Array<ModelPrivateCommentConditionInput | null> | null;
  not?: ModelPrivateCommentConditionInput | null;
};

export type UpdatePrivateCommentInput = {
  id: string;
  postID?: string | null;
  comment?: string | null;
  _version?: number | null;
};

export type DeletePrivateCommentInput = {
  id: string;
  _version?: number | null;
};

export type ModelPublicBlogFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelPublicBlogFilterInput | null> | null;
  or?: Array<ModelPublicBlogFilterInput | null> | null;
  not?: ModelPublicBlogFilterInput | null;
};

export type ModelPublicBlogConnection = {
  __typename: 'ModelPublicBlogConnection';
  items: Array<PublicBlog | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelPublicPostFilterInput = {
  id?: ModelIDInput | null;
  blogID?: ModelIDInput | null;
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelPublicPostFilterInput | null> | null;
  or?: Array<ModelPublicPostFilterInput | null> | null;
  not?: ModelPublicPostFilterInput | null;
};

export type ModelPublicCommentFilterInput = {
  id?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  comment?: ModelStringInput | null;
  and?: Array<ModelPublicCommentFilterInput | null> | null;
  or?: Array<ModelPublicCommentFilterInput | null> | null;
  not?: ModelPublicCommentFilterInput | null;
};

export type ModelPrivateBlogFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelPrivateBlogFilterInput | null> | null;
  or?: Array<ModelPrivateBlogFilterInput | null> | null;
  not?: ModelPrivateBlogFilterInput | null;
};

export type ModelPrivateBlogConnection = {
  __typename: 'ModelPrivateBlogConnection';
  items: Array<PrivateBlog | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelPrivatePostFilterInput = {
  id?: ModelIDInput | null;
  blogID?: ModelIDInput | null;
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelPrivatePostFilterInput | null> | null;
  or?: Array<ModelPrivatePostFilterInput | null> | null;
  not?: ModelPrivatePostFilterInput | null;
};

export type ModelPrivateCommentFilterInput = {
  id?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  comment?: ModelStringInput | null;
  and?: Array<ModelPrivateCommentFilterInput | null> | null;
  or?: Array<ModelPrivateCommentFilterInput | null> | null;
  not?: ModelPrivateCommentFilterInput | null;
};

export type CreatePublicBlogMutationVariables = {
  input: CreatePublicBlogInput;
  condition?: ModelPublicBlogConditionInput | null;
};

export type CreatePublicBlogMutation = {
  createPublicBlog?: {
    __typename: 'PublicBlog';
    id: string;
    name: string;
    posts?: {
      __typename: 'ModelPublicPostConnection';
      items: Array<{
        __typename: 'PublicPost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdatePublicBlogMutationVariables = {
  input: UpdatePublicBlogInput;
  condition?: ModelPublicBlogConditionInput | null;
};

export type UpdatePublicBlogMutation = {
  updatePublicBlog?: {
    __typename: 'PublicBlog';
    id: string;
    name: string;
    posts?: {
      __typename: 'ModelPublicPostConnection';
      items: Array<{
        __typename: 'PublicPost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeletePublicBlogMutationVariables = {
  input: DeletePublicBlogInput;
  condition?: ModelPublicBlogConditionInput | null;
};

export type DeletePublicBlogMutation = {
  deletePublicBlog?: {
    __typename: 'PublicBlog';
    id: string;
    name: string;
    posts?: {
      __typename: 'ModelPublicPostConnection';
      items: Array<{
        __typename: 'PublicPost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type CreatePublicPostMutationVariables = {
  input: CreatePublicPostInput;
  condition?: ModelPublicPostConditionInput | null;
};

export type CreatePublicPostMutation = {
  createPublicPost?: {
    __typename: 'PublicPost';
    id: string;
    blogID: string;
    comments?: {
      __typename: 'ModelPublicCommentConnection';
      items: Array<{
        __typename: 'PublicComment';
        id: string;
        postID: string;
        comment: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    title: string;
    PublicBlog?: {
      __typename: 'PublicBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPublicPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdatePublicPostMutationVariables = {
  input: UpdatePublicPostInput;
  condition?: ModelPublicPostConditionInput | null;
};

export type UpdatePublicPostMutation = {
  updatePublicPost?: {
    __typename: 'PublicPost';
    id: string;
    blogID: string;
    comments?: {
      __typename: 'ModelPublicCommentConnection';
      items: Array<{
        __typename: 'PublicComment';
        id: string;
        postID: string;
        comment: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    title: string;
    PublicBlog?: {
      __typename: 'PublicBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPublicPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeletePublicPostMutationVariables = {
  input: DeletePublicPostInput;
  condition?: ModelPublicPostConditionInput | null;
};

export type DeletePublicPostMutation = {
  deletePublicPost?: {
    __typename: 'PublicPost';
    id: string;
    blogID: string;
    comments?: {
      __typename: 'ModelPublicCommentConnection';
      items: Array<{
        __typename: 'PublicComment';
        id: string;
        postID: string;
        comment: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    title: string;
    PublicBlog?: {
      __typename: 'PublicBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPublicPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type CreatePublicCommentMutationVariables = {
  input: CreatePublicCommentInput;
  condition?: ModelPublicCommentConditionInput | null;
};

export type CreatePublicCommentMutation = {
  createPublicComment?: {
    __typename: 'PublicComment';
    id: string;
    postID: string;
    comment: string;
    PublicPost?: {
      __typename: 'PublicPost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPublicCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PublicBlog?: {
        __typename: 'PublicBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdatePublicCommentMutationVariables = {
  input: UpdatePublicCommentInput;
  condition?: ModelPublicCommentConditionInput | null;
};

export type UpdatePublicCommentMutation = {
  updatePublicComment?: {
    __typename: 'PublicComment';
    id: string;
    postID: string;
    comment: string;
    PublicPost?: {
      __typename: 'PublicPost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPublicCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PublicBlog?: {
        __typename: 'PublicBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeletePublicCommentMutationVariables = {
  input: DeletePublicCommentInput;
  condition?: ModelPublicCommentConditionInput | null;
};

export type DeletePublicCommentMutation = {
  deletePublicComment?: {
    __typename: 'PublicComment';
    id: string;
    postID: string;
    comment: string;
    PublicPost?: {
      __typename: 'PublicPost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPublicCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PublicBlog?: {
        __typename: 'PublicBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type CreatePrivateBlogMutationVariables = {
  input: CreatePrivateBlogInput;
  condition?: ModelPrivateBlogConditionInput | null;
};

export type CreatePrivateBlogMutation = {
  createPrivateBlog?: {
    __typename: 'PrivateBlog';
    id: string;
    name: string;
    posts?: {
      __typename: 'ModelPrivatePostConnection';
      items: Array<{
        __typename: 'PrivatePost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdatePrivateBlogMutationVariables = {
  input: UpdatePrivateBlogInput;
  condition?: ModelPrivateBlogConditionInput | null;
};

export type UpdatePrivateBlogMutation = {
  updatePrivateBlog?: {
    __typename: 'PrivateBlog';
    id: string;
    name: string;
    posts?: {
      __typename: 'ModelPrivatePostConnection';
      items: Array<{
        __typename: 'PrivatePost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeletePrivateBlogMutationVariables = {
  input: DeletePrivateBlogInput;
  condition?: ModelPrivateBlogConditionInput | null;
};

export type DeletePrivateBlogMutation = {
  deletePrivateBlog?: {
    __typename: 'PrivateBlog';
    id: string;
    name: string;
    posts?: {
      __typename: 'ModelPrivatePostConnection';
      items: Array<{
        __typename: 'PrivatePost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type CreatePrivatePostMutationVariables = {
  input: CreatePrivatePostInput;
  condition?: ModelPrivatePostConditionInput | null;
};

export type CreatePrivatePostMutation = {
  createPrivatePost?: {
    __typename: 'PrivatePost';
    id: string;
    blogID: string;
    comments?: {
      __typename: 'ModelPrivateCommentConnection';
      items: Array<{
        __typename: 'PrivateComment';
        id: string;
        postID: string;
        comment: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    title: string;
    PrivateBlog?: {
      __typename: 'PrivateBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPrivatePostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdatePrivatePostMutationVariables = {
  input: UpdatePrivatePostInput;
  condition?: ModelPrivatePostConditionInput | null;
};

export type UpdatePrivatePostMutation = {
  updatePrivatePost?: {
    __typename: 'PrivatePost';
    id: string;
    blogID: string;
    comments?: {
      __typename: 'ModelPrivateCommentConnection';
      items: Array<{
        __typename: 'PrivateComment';
        id: string;
        postID: string;
        comment: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    title: string;
    PrivateBlog?: {
      __typename: 'PrivateBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPrivatePostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeletePrivatePostMutationVariables = {
  input: DeletePrivatePostInput;
  condition?: ModelPrivatePostConditionInput | null;
};

export type DeletePrivatePostMutation = {
  deletePrivatePost?: {
    __typename: 'PrivatePost';
    id: string;
    blogID: string;
    comments?: {
      __typename: 'ModelPrivateCommentConnection';
      items: Array<{
        __typename: 'PrivateComment';
        id: string;
        postID: string;
        comment: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    title: string;
    PrivateBlog?: {
      __typename: 'PrivateBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPrivatePostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type CreatePrivateCommentMutationVariables = {
  input: CreatePrivateCommentInput;
  condition?: ModelPrivateCommentConditionInput | null;
};

export type CreatePrivateCommentMutation = {
  createPrivateComment?: {
    __typename: 'PrivateComment';
    id: string;
    postID: string;
    comment: string;
    PrivatePost?: {
      __typename: 'PrivatePost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPrivateCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PrivateBlog?: {
        __typename: 'PrivateBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdatePrivateCommentMutationVariables = {
  input: UpdatePrivateCommentInput;
  condition?: ModelPrivateCommentConditionInput | null;
};

export type UpdatePrivateCommentMutation = {
  updatePrivateComment?: {
    __typename: 'PrivateComment';
    id: string;
    postID: string;
    comment: string;
    PrivatePost?: {
      __typename: 'PrivatePost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPrivateCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PrivateBlog?: {
        __typename: 'PrivateBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeletePrivateCommentMutationVariables = {
  input: DeletePrivateCommentInput;
  condition?: ModelPrivateCommentConditionInput | null;
};

export type DeletePrivateCommentMutation = {
  deletePrivateComment?: {
    __typename: 'PrivateComment';
    id: string;
    postID: string;
    comment: string;
    PrivatePost?: {
      __typename: 'PrivatePost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPrivateCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PrivateBlog?: {
        __typename: 'PrivateBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type GetPublicBlogQueryVariables = {
  id: string;
};

export type GetPublicBlogQuery = {
  getPublicBlog?: {
    __typename: 'PublicBlog';
    id: string;
    name: string;
    posts?: {
      __typename: 'ModelPublicPostConnection';
      items: Array<{
        __typename: 'PublicPost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListPublicBlogsQueryVariables = {
  filter?: ModelPublicBlogFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPublicBlogsQuery = {
  listPublicBlogs?: {
    __typename: 'ModelPublicBlogConnection';
    items: Array<{
      __typename: 'PublicBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPublicPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncPublicBlogsQueryVariables = {
  filter?: ModelPublicBlogFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncPublicBlogsQuery = {
  syncPublicBlogs?: {
    __typename: 'ModelPublicBlogConnection';
    items: Array<{
      __typename: 'PublicBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPublicPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetPublicPostQueryVariables = {
  id: string;
};

export type GetPublicPostQuery = {
  getPublicPost?: {
    __typename: 'PublicPost';
    id: string;
    blogID: string;
    comments?: {
      __typename: 'ModelPublicCommentConnection';
      items: Array<{
        __typename: 'PublicComment';
        id: string;
        postID: string;
        comment: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    title: string;
    PublicBlog?: {
      __typename: 'PublicBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPublicPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListPublicPostsQueryVariables = {
  filter?: ModelPublicPostFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPublicPostsQuery = {
  listPublicPosts?: {
    __typename: 'ModelPublicPostConnection';
    items: Array<{
      __typename: 'PublicPost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPublicCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PublicBlog?: {
        __typename: 'PublicBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncPublicPostsQueryVariables = {
  filter?: ModelPublicPostFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncPublicPostsQuery = {
  syncPublicPosts?: {
    __typename: 'ModelPublicPostConnection';
    items: Array<{
      __typename: 'PublicPost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPublicCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PublicBlog?: {
        __typename: 'PublicBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetPublicCommentQueryVariables = {
  id: string;
};

export type GetPublicCommentQuery = {
  getPublicComment?: {
    __typename: 'PublicComment';
    id: string;
    postID: string;
    comment: string;
    PublicPost?: {
      __typename: 'PublicPost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPublicCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PublicBlog?: {
        __typename: 'PublicBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListPublicCommentsQueryVariables = {
  filter?: ModelPublicCommentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPublicCommentsQuery = {
  listPublicComments?: {
    __typename: 'ModelPublicCommentConnection';
    items: Array<{
      __typename: 'PublicComment';
      id: string;
      postID: string;
      comment: string;
      PublicPost?: {
        __typename: 'PublicPost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncPublicCommentsQueryVariables = {
  filter?: ModelPublicCommentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncPublicCommentsQuery = {
  syncPublicComments?: {
    __typename: 'ModelPublicCommentConnection';
    items: Array<{
      __typename: 'PublicComment';
      id: string;
      postID: string;
      comment: string;
      PublicPost?: {
        __typename: 'PublicPost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetPrivateBlogQueryVariables = {
  id: string;
};

export type GetPrivateBlogQuery = {
  getPrivateBlog?: {
    __typename: 'PrivateBlog';
    id: string;
    name: string;
    posts?: {
      __typename: 'ModelPrivatePostConnection';
      items: Array<{
        __typename: 'PrivatePost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListPrivateBlogsQueryVariables = {
  filter?: ModelPrivateBlogFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPrivateBlogsQuery = {
  listPrivateBlogs?: {
    __typename: 'ModelPrivateBlogConnection';
    items: Array<{
      __typename: 'PrivateBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPrivatePostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncPrivateBlogsQueryVariables = {
  filter?: ModelPrivateBlogFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncPrivateBlogsQuery = {
  syncPrivateBlogs?: {
    __typename: 'ModelPrivateBlogConnection';
    items: Array<{
      __typename: 'PrivateBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPrivatePostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetPrivatePostQueryVariables = {
  id: string;
};

export type GetPrivatePostQuery = {
  getPrivatePost?: {
    __typename: 'PrivatePost';
    id: string;
    blogID: string;
    comments?: {
      __typename: 'ModelPrivateCommentConnection';
      items: Array<{
        __typename: 'PrivateComment';
        id: string;
        postID: string;
        comment: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    title: string;
    PrivateBlog?: {
      __typename: 'PrivateBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPrivatePostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListPrivatePostsQueryVariables = {
  filter?: ModelPrivatePostFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPrivatePostsQuery = {
  listPrivatePosts?: {
    __typename: 'ModelPrivatePostConnection';
    items: Array<{
      __typename: 'PrivatePost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPrivateCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PrivateBlog?: {
        __typename: 'PrivateBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncPrivatePostsQueryVariables = {
  filter?: ModelPrivatePostFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncPrivatePostsQuery = {
  syncPrivatePosts?: {
    __typename: 'ModelPrivatePostConnection';
    items: Array<{
      __typename: 'PrivatePost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPrivateCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PrivateBlog?: {
        __typename: 'PrivateBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetPrivateCommentQueryVariables = {
  id: string;
};

export type GetPrivateCommentQuery = {
  getPrivateComment?: {
    __typename: 'PrivateComment';
    id: string;
    postID: string;
    comment: string;
    PrivatePost?: {
      __typename: 'PrivatePost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPrivateCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PrivateBlog?: {
        __typename: 'PrivateBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListPrivateCommentsQueryVariables = {
  filter?: ModelPrivateCommentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPrivateCommentsQuery = {
  listPrivateComments?: {
    __typename: 'ModelPrivateCommentConnection';
    items: Array<{
      __typename: 'PrivateComment';
      id: string;
      postID: string;
      comment: string;
      PrivatePost?: {
        __typename: 'PrivatePost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncPrivateCommentsQueryVariables = {
  filter?: ModelPrivateCommentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncPrivateCommentsQuery = {
  syncPrivateComments?: {
    __typename: 'ModelPrivateCommentConnection';
    items: Array<{
      __typename: 'PrivateComment';
      id: string;
      postID: string;
      comment: string;
      PrivatePost?: {
        __typename: 'PrivatePost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type OnCreatePublicBlogSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreatePublicBlogSubscription = {
  onCreatePublicBlog?: {
    __typename: 'PublicBlog';
    id: string;
    name: string;
    posts?: {
      __typename: 'ModelPublicPostConnection';
      items: Array<{
        __typename: 'PublicPost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdatePublicBlogSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdatePublicBlogSubscription = {
  onUpdatePublicBlog?: {
    __typename: 'PublicBlog';
    id: string;
    name: string;
    posts?: {
      __typename: 'ModelPublicPostConnection';
      items: Array<{
        __typename: 'PublicPost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeletePublicBlogSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeletePublicBlogSubscription = {
  onDeletePublicBlog?: {
    __typename: 'PublicBlog';
    id: string;
    name: string;
    posts?: {
      __typename: 'ModelPublicPostConnection';
      items: Array<{
        __typename: 'PublicPost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreatePublicPostSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreatePublicPostSubscription = {
  onCreatePublicPost?: {
    __typename: 'PublicPost';
    id: string;
    blogID: string;
    comments?: {
      __typename: 'ModelPublicCommentConnection';
      items: Array<{
        __typename: 'PublicComment';
        id: string;
        postID: string;
        comment: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    title: string;
    PublicBlog?: {
      __typename: 'PublicBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPublicPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdatePublicPostSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdatePublicPostSubscription = {
  onUpdatePublicPost?: {
    __typename: 'PublicPost';
    id: string;
    blogID: string;
    comments?: {
      __typename: 'ModelPublicCommentConnection';
      items: Array<{
        __typename: 'PublicComment';
        id: string;
        postID: string;
        comment: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    title: string;
    PublicBlog?: {
      __typename: 'PublicBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPublicPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeletePublicPostSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeletePublicPostSubscription = {
  onDeletePublicPost?: {
    __typename: 'PublicPost';
    id: string;
    blogID: string;
    comments?: {
      __typename: 'ModelPublicCommentConnection';
      items: Array<{
        __typename: 'PublicComment';
        id: string;
        postID: string;
        comment: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    title: string;
    PublicBlog?: {
      __typename: 'PublicBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPublicPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreatePublicCommentSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreatePublicCommentSubscription = {
  onCreatePublicComment?: {
    __typename: 'PublicComment';
    id: string;
    postID: string;
    comment: string;
    PublicPost?: {
      __typename: 'PublicPost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPublicCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PublicBlog?: {
        __typename: 'PublicBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdatePublicCommentSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdatePublicCommentSubscription = {
  onUpdatePublicComment?: {
    __typename: 'PublicComment';
    id: string;
    postID: string;
    comment: string;
    PublicPost?: {
      __typename: 'PublicPost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPublicCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PublicBlog?: {
        __typename: 'PublicBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeletePublicCommentSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeletePublicCommentSubscription = {
  onDeletePublicComment?: {
    __typename: 'PublicComment';
    id: string;
    postID: string;
    comment: string;
    PublicPost?: {
      __typename: 'PublicPost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPublicCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PublicBlog?: {
        __typename: 'PublicBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreatePrivateBlogSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreatePrivateBlogSubscription = {
  onCreatePrivateBlog?: {
    __typename: 'PrivateBlog';
    id: string;
    name: string;
    posts?: {
      __typename: 'ModelPrivatePostConnection';
      items: Array<{
        __typename: 'PrivatePost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdatePrivateBlogSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdatePrivateBlogSubscription = {
  onUpdatePrivateBlog?: {
    __typename: 'PrivateBlog';
    id: string;
    name: string;
    posts?: {
      __typename: 'ModelPrivatePostConnection';
      items: Array<{
        __typename: 'PrivatePost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeletePrivateBlogSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeletePrivateBlogSubscription = {
  onDeletePrivateBlog?: {
    __typename: 'PrivateBlog';
    id: string;
    name: string;
    posts?: {
      __typename: 'ModelPrivatePostConnection';
      items: Array<{
        __typename: 'PrivatePost';
        id: string;
        blogID: string;
        title: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreatePrivatePostSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreatePrivatePostSubscription = {
  onCreatePrivatePost?: {
    __typename: 'PrivatePost';
    id: string;
    blogID: string;
    comments?: {
      __typename: 'ModelPrivateCommentConnection';
      items: Array<{
        __typename: 'PrivateComment';
        id: string;
        postID: string;
        comment: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    title: string;
    PrivateBlog?: {
      __typename: 'PrivateBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPrivatePostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdatePrivatePostSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdatePrivatePostSubscription = {
  onUpdatePrivatePost?: {
    __typename: 'PrivatePost';
    id: string;
    blogID: string;
    comments?: {
      __typename: 'ModelPrivateCommentConnection';
      items: Array<{
        __typename: 'PrivateComment';
        id: string;
        postID: string;
        comment: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    title: string;
    PrivateBlog?: {
      __typename: 'PrivateBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPrivatePostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeletePrivatePostSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeletePrivatePostSubscription = {
  onDeletePrivatePost?: {
    __typename: 'PrivatePost';
    id: string;
    blogID: string;
    comments?: {
      __typename: 'ModelPrivateCommentConnection';
      items: Array<{
        __typename: 'PrivateComment';
        id: string;
        postID: string;
        comment: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    title: string;
    PrivateBlog?: {
      __typename: 'PrivateBlog';
      id: string;
      name: string;
      posts?: {
        __typename: 'ModelPrivatePostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreatePrivateCommentSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreatePrivateCommentSubscription = {
  onCreatePrivateComment?: {
    __typename: 'PrivateComment';
    id: string;
    postID: string;
    comment: string;
    PrivatePost?: {
      __typename: 'PrivatePost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPrivateCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PrivateBlog?: {
        __typename: 'PrivateBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdatePrivateCommentSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdatePrivateCommentSubscription = {
  onUpdatePrivateComment?: {
    __typename: 'PrivateComment';
    id: string;
    postID: string;
    comment: string;
    PrivatePost?: {
      __typename: 'PrivatePost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPrivateCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PrivateBlog?: {
        __typename: 'PrivateBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeletePrivateCommentSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeletePrivateCommentSubscription = {
  onDeletePrivateComment?: {
    __typename: 'PrivateComment';
    id: string;
    postID: string;
    comment: string;
    PrivatePost?: {
      __typename: 'PrivatePost';
      id: string;
      blogID: string;
      comments?: {
        __typename: 'ModelPrivateCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      title: string;
      PrivateBlog?: {
        __typename: 'PrivateBlog';
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};
