/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPublicBlog = /* GraphQL */ `
  mutation CreatePublicBlog(
    $input: CreatePublicBlogInput!
    $condition: ModelPublicBlogConditionInput
  ) {
    createPublicBlog(input: $input, condition: $condition) {
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
export const updatePublicBlog = /* GraphQL */ `
  mutation UpdatePublicBlog(
    $input: UpdatePublicBlogInput!
    $condition: ModelPublicBlogConditionInput
  ) {
    updatePublicBlog(input: $input, condition: $condition) {
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
export const deletePublicBlog = /* GraphQL */ `
  mutation DeletePublicBlog(
    $input: DeletePublicBlogInput!
    $condition: ModelPublicBlogConditionInput
  ) {
    deletePublicBlog(input: $input, condition: $condition) {
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
export const createPublicPost = /* GraphQL */ `
  mutation CreatePublicPost(
    $input: CreatePublicPostInput!
    $condition: ModelPublicPostConditionInput
  ) {
    createPublicPost(input: $input, condition: $condition) {
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
export const updatePublicPost = /* GraphQL */ `
  mutation UpdatePublicPost(
    $input: UpdatePublicPostInput!
    $condition: ModelPublicPostConditionInput
  ) {
    updatePublicPost(input: $input, condition: $condition) {
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
export const deletePublicPost = /* GraphQL */ `
  mutation DeletePublicPost(
    $input: DeletePublicPostInput!
    $condition: ModelPublicPostConditionInput
  ) {
    deletePublicPost(input: $input, condition: $condition) {
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
export const createPublicComment = /* GraphQL */ `
  mutation CreatePublicComment(
    $input: CreatePublicCommentInput!
    $condition: ModelPublicCommentConditionInput
  ) {
    createPublicComment(input: $input, condition: $condition) {
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
export const updatePublicComment = /* GraphQL */ `
  mutation UpdatePublicComment(
    $input: UpdatePublicCommentInput!
    $condition: ModelPublicCommentConditionInput
  ) {
    updatePublicComment(input: $input, condition: $condition) {
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
export const deletePublicComment = /* GraphQL */ `
  mutation DeletePublicComment(
    $input: DeletePublicCommentInput!
    $condition: ModelPublicCommentConditionInput
  ) {
    deletePublicComment(input: $input, condition: $condition) {
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
export const createPrivateBlog = /* GraphQL */ `
  mutation CreatePrivateBlog(
    $input: CreatePrivateBlogInput!
    $condition: ModelPrivateBlogConditionInput
  ) {
    createPrivateBlog(input: $input, condition: $condition) {
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
export const updatePrivateBlog = /* GraphQL */ `
  mutation UpdatePrivateBlog(
    $input: UpdatePrivateBlogInput!
    $condition: ModelPrivateBlogConditionInput
  ) {
    updatePrivateBlog(input: $input, condition: $condition) {
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
export const deletePrivateBlog = /* GraphQL */ `
  mutation DeletePrivateBlog(
    $input: DeletePrivateBlogInput!
    $condition: ModelPrivateBlogConditionInput
  ) {
    deletePrivateBlog(input: $input, condition: $condition) {
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
export const createPrivatePost = /* GraphQL */ `
  mutation CreatePrivatePost(
    $input: CreatePrivatePostInput!
    $condition: ModelPrivatePostConditionInput
  ) {
    createPrivatePost(input: $input, condition: $condition) {
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
export const updatePrivatePost = /* GraphQL */ `
  mutation UpdatePrivatePost(
    $input: UpdatePrivatePostInput!
    $condition: ModelPrivatePostConditionInput
  ) {
    updatePrivatePost(input: $input, condition: $condition) {
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
export const deletePrivatePost = /* GraphQL */ `
  mutation DeletePrivatePost(
    $input: DeletePrivatePostInput!
    $condition: ModelPrivatePostConditionInput
  ) {
    deletePrivatePost(input: $input, condition: $condition) {
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
export const createPrivateComment = /* GraphQL */ `
  mutation CreatePrivateComment(
    $input: CreatePrivateCommentInput!
    $condition: ModelPrivateCommentConditionInput
  ) {
    createPrivateComment(input: $input, condition: $condition) {
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
export const updatePrivateComment = /* GraphQL */ `
  mutation UpdatePrivateComment(
    $input: UpdatePrivateCommentInput!
    $condition: ModelPrivateCommentConditionInput
  ) {
    updatePrivateComment(input: $input, condition: $condition) {
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
export const deletePrivateComment = /* GraphQL */ `
  mutation DeletePrivateComment(
    $input: DeletePrivateCommentInput!
    $condition: ModelPrivateCommentConditionInput
  ) {
    deletePrivateComment(input: $input, condition: $condition) {
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
