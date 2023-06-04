const endpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appId = 'bEFSYipxuLqO077Krx8x';

const postComments = async (itemId, username, comment) => {
  try {
    const res = await fetch(`${endpoint}/${appId}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username: username,
        comment: comment,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to post comment');
    }
  } catch (error) {
    console.error('Error posting comment:', error);
    throw error;
  }
};

const getComments = async (itemId) => {
  try {
    const res = await fetch(`${endpoint}/${appId}/comments?item_id=${itemId}`);

    if (res.ok) {
      const comments = await res.json();
      const commentsContainer = document.querySelector('#comments');
      commentsContainer.innerHTML = '';

      if (comments.length > 0) {
        comments.forEach((comment) => {
          const li = document.createElement('li');
          li.textContent = comment.comment;
          commentsContainer.appendChild(li);
        });
      } else {
        const li = document.createElement('li');
        li.textContent = 'No comments yet.';
        commentsContainer.appendChild(li);
      }
    } else {
      throw new Error(`Failed to get comments. Response status: ${res.status}`);
    }
  } catch (error) {
    console.error('Error getting comments:', error);
    throw error;
  }
};

export { postComments, getComments };

