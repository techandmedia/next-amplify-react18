/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePublicBlog = /* GraphQL */ `
  subscription OnCreatePublicBlog($owner: String) {
    onCreatePublicBlog(owner: $owner) {
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
export const onUpdatePublicBlog = /* GraphQL */ `
  subscription OnUpdatePublicBlog($owner: String) {
    onUpdatePublicBlog(owner: $owner) {
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
export const onDeletePublicBlog = /* GraphQL */ `
  subscription OnDeletePublicBlog($owner: String) {
    onDeletePublicBlog(owner: $owner) {
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
export const onCreatePublicPost = /* GraphQL */ `
  subscription OnCreatePublicPost($owner: String) {
    onCreatePublicPost(owner: $owner) {
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
export const onUpdatePublicPost = /* GraphQL */ `
  subscription OnUpdatePublicPost($owner: String) {
    onUpdatePublicPost(owner: $owner) {
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
export const onDeletePublicPost = /* GraphQL */ `
  subscription OnDeletePublicPost($owner: String) {
    onDeletePublicPost(owner: $owner) {
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
export const onCreatePublicComment = /* GraphQL */ `
  subscription OnCreatePublicComment($owner: String) {
    onCreatePublicComment(owner: $owner) {
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
export const onUpdatePublicComment = /* GraphQL */ `
  subscription OnUpdatePublicComment($owner: String) {
    onUpdatePublicComment(owner: $owner) {
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
export const onDeletePublicComment = /* GraphQL */ `
  subscription OnDeletePublicComment($owner: String) {
    onDeletePublicComment(owner: $owner) {
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
export const onCreatePrivateBlog = /* GraphQL */ `
  subscription OnCreatePrivateBlog($owner: String) {
    onCreatePrivateBlog(owner: $owner) {
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
export const onUpdatePrivateBlog = /* GraphQL */ `
  subscription OnUpdatePrivateBlog($owner: String) {
    onUpdatePrivateBlog(owner: $owner) {
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
export const onDeletePrivateBlog = /* GraphQL */ `
  subscription OnDeletePrivateBlog($owner: String) {
    onDeletePrivateBlog(owner: $owner) {
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
export const onCreatePrivatePost = /* GraphQL */ `
  subscription OnCreatePrivatePost($owner: String) {
    onCreatePrivatePost(owner: $owner) {
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
export const onUpdatePrivatePost = /* GraphQL */ `
  subscription OnUpdatePrivatePost($owner: String) {
    onUpdatePrivatePost(owner: $owner) {
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
export const onDeletePrivatePost = /* GraphQL */ `
  subscription OnDeletePrivatePost($owner: String) {
    onDeletePrivatePost(owner: $owner) {
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
export const onCreatePrivateComment = /* GraphQL */ `
  subscription OnCreatePrivateComment($owner: String) {
    onCreatePrivateComment(owner: $owner) {
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
export const onUpdatePrivateComment = /* GraphQL */ `
  subscription OnUpdatePrivateComment($owner: String) {
    onUpdatePrivateComment(owner: $owner) {
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
export const onDeletePrivateComment = /* GraphQL */ `
  subscription OnDeletePrivateComment($owner: String) {
    onDeletePrivateComment(owner: $owner) {
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
