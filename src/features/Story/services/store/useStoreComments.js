import { create } from 'zustand';

const createCommentStore = (initialState = {}) => {
  return create((set) => ({
    collapsed: initialState.collapsed || false,
    collapsedChildren: initialState.collapsedChildren || true,
    childrenIds: initialState.childrenIds || [],
    directChildrenIds: initialState.directChildrenIds || [],
    setCollapsed: (collapsed) => set({ collapsed }),
    setCollapsedChildren: (collapsedChildren) => set({ collapsedChildren }),
  }));
};

// Object to hold all comment stores
const commentStores = new Map();

const setCommentStore = (commentId, initialState = {}) => {
  if (typeof commentId !== 'number') {
    console.error('Invalid comment ID type.');
  }
  if (commentStores.has(commentId)) {
    console.error(`Comment with ID ${commentId} already exists`);
  }
  const store = createCommentStore(initialState);
  commentStores.set(commentId, store);
  return store;
};

const createCommentStores = (commentsObject) => {
  try {
    Object.keys(commentsObject).forEach((commentId) => {
      if (commentsObject.hasOwnProperty(commentId)) {
        setCommentStore(parseInt(commentId), commentsObject[commentId]);
      } else {
        console.error(`Invalid comment ID: ${commentId}`);
      }
    });
  } catch (error) {
    console.error('Error creating comment stores:', error.message);
  }
};

const setCommentChildrenCollapsed = (commentId, isCollapsed) => {
  if (typeof commentId !== 'number') {
    console.error(`Invalid comment ID: ${commentId}`);
  }
  console.log('SET COMMENT CHILDREN COLLAPSED', commentId, isCollapsed);
  const { setCollapsedChildren } = getCommentStore(commentId).getState();
  setCollapsedChildren(isCollapsed);
};

const setCommentsCollapsed = (commentIdsArray, isCollapsed) => {
  if (!Array.isArray(commentIdsArray)) {
    console.error(
      'Expected an array of comment IDs, but received an invalid input.'
    );
    return;
  }
  for (const id of commentIdsArray) {
    console.log('ID SET COLLAPSED', id);

    const store = getCommentStore(id);
    if (!store) {
      console.error(`No store found for comment ID ${id}`);
      continue;
    }

    const { setCollapsed } = store.getState();
    setCollapsed(isCollapsed);
  }
};

const getCommentStore = (commentId) => {
  if (!commentStores.has(commentId)) {
    console.error(`Comment with ID ${commentId} not found`);
  }
  const store = commentStores.get(commentId);
  return store;
};

export const useStoreComments = () => {
  return {
    createCommentStores,
    setCommentChildrenCollapsed,
    setCommentsCollapsed,
    getCommentStore,
  };
};
