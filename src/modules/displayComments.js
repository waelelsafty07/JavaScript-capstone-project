import Comments from "./comments";

const displayComments = (itemId) => {

  const commentsSection = document.querySelector('#comments-section');
  if(commentsSection){

    const CommentAPI = new Comments();
      const body ={
        item_id: itemId
      }
      CommentAPI.getComments(itemId).then((data) => {
    data.forEach((d) => {

      const commentLi = document.createElement('li')
      commentLi.textContent = `${d.creation_date} ${d.username}: ${d.comment}`
      commentsSection.appendChild(commentLi);
    })      
  })

  }
  
}

export default displayComments;