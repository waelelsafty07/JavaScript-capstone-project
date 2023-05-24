const displayLikes = (likesArray, targetId) => {
  const like = likesArray
    .filter((item) => Number(item.item_id) === Number(targetId))
    .map((item) => item.likes);
  return like;
};

export default displayLikes;
