const countComments = () => {
  const commentsContainer = document.getElementById('comments');
  const comments = commentsContainer.getElementsByTagName('li');
  return comments.length;
};

export default countComments;

