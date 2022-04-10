/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPublicBlog = /* GraphQL */ `
  query GetPublicBlog($id: ID!) {
    getPublicBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          blogID
          title
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listPublicBlogs = /* GraphQL */ `
  query ListPublicBlogs($filter: ModelPublicBlogFilterInput, $limit: Int, $nextToken: String) {
    listPublicBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPublicBlogs = /* GraphQL */ `
  query SyncPublicBlogs(
    $filter: ModelPublicBlogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPublicBlogs(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
      items {
        id
        name
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPublicPost = /* GraphQL */ `
  query GetPublicPost($id: ID!) {
    getPublicPost(id: $id) {
      id
      blogID
      comments {
        items {
          id
          postID
          comment
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      title
      PublicBlog {
        id
        name
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listPublicPosts = /* GraphQL */ `
  query ListPublicPosts($filter: ModelPublicPostFilterInput, $limit: Int, $nextToken: String) {
    listPublicPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        blogID
        comments {
          nextToken
          startedAt
        }
        title
        PublicBlog {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPublicPosts = /* GraphQL */ `
  query SyncPublicPosts(
    $filter: ModelPublicPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPublicPosts(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
      items {
        id
        blogID
        comments {
          nextToken
          startedAt
        }
        title
        PublicBlog {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPublicComment = /* GraphQL */ `
  query GetPublicComment($id: ID!) {
    getPublicComment(id: $id) {
      id
      postID
      comment
      PublicPost {
        id
        blogID
        comments {
          nextToken
          startedAt
        }
        title
        PublicBlog {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listPublicComments = /* GraphQL */ `
  query ListPublicComments(
    $filter: ModelPublicCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        comment
        PublicPost {
          id
          blogID
          title
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPublicComments = /* GraphQL */ `
  query SyncPublicComments(
    $filter: ModelPublicCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPublicComments(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
      items {
        id
        postID
        comment
        PublicPost {
          id
          blogID
          title
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPrivateBlog = /* GraphQL */ `
  query GetPrivateBlog($id: ID!) {
    getPrivateBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          blogID
          title
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listPrivateBlogs = /* GraphQL */ `
  query ListPrivateBlogs($filter: ModelPrivateBlogFilterInput, $limit: Int, $nextToken: String) {
    listPrivateBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPrivateBlogs = /* GraphQL */ `
  query SyncPrivateBlogs(
    $filter: ModelPrivateBlogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrivateBlogs(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
      items {
        id
        name
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPrivatePost = /* GraphQL */ `
  query GetPrivatePost($id: ID!) {
    getPrivatePost(id: $id) {
      id
      blogID
      comments {
        items {
          id
          postID
          comment
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      title
      PrivateBlog {
        id
        name
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listPrivatePosts = /* GraphQL */ `
  query ListPrivatePosts($filter: ModelPrivatePostFilterInput, $limit: Int, $nextToken: String) {
    listPrivatePosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        blogID
        comments {
          nextToken
          startedAt
        }
        title
        PrivateBlog {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPrivatePosts = /* GraphQL */ `
  query SyncPrivatePosts(
    $filter: ModelPrivatePostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrivatePosts(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
      items {
        id
        blogID
        comments {
          nextToken
          startedAt
        }
        title
        PrivateBlog {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPrivateComment = /* GraphQL */ `
  query GetPrivateComment($id: ID!) {
    getPrivateComment(id: $id) {
      id
      postID
      comment
      PrivatePost {
        id
        blogID
        comments {
          nextToken
          startedAt
        }
        title
        PrivateBlog {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listPrivateComments = /* GraphQL */ `
  query ListPrivateComments(
    $filter: ModelPrivateCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        comment
        PrivatePost {
          id
          blogID
          title
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPrivateComments = /* GraphQL */ `
  query SyncPrivateComments(
    $filter: ModelPrivateCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrivateComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        postID
        comment
        PrivatePost {
          id
          blogID
          title
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
