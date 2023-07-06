
export default function useComments(CommentsData, text_new_comments, isExpanded ) {


  const updateLikes = (index) => {
    if (!CommentsData.value[index].dislikes) {
    CommentsData.value[index].likes++;
    CommentsData.value[index].dislikes = true;
    } else {
    CommentsData.value[index].likes--;
    CommentsData.value[index].dislikes = false;
    }
   };

   
  const updateDisLikes = (index) => {
    if (CommentsData.value.comments[index].dislikes) 
    {
        CommentsData.value.comments[index].likes--;
        CommentsData.value.comments[index].dislikes = false;
    }
  };

  // Replies Comments
  const updateReplyLikes = (commentIndex, replyIndex) => {
    console.log(CommentsData.value.comments[commentIndex].replies[replyIndex]);
    const reply = CommentsData.value.comments[commentIndex].replies[replyIndex];
    if (!reply.dislikes) {
      reply.likes++;
      reply.dislikes = true;
    } else {
      reply.likes--;
      reply.dislikes = false;
    }
  };

  const updateReplyDislikes = (commentIndex, replyIndex) => {
    const reply = CommentsData.value.comments[commentIndex].replies[replyIndex];
    if (reply.dislikes) {
      reply.likes--;
      reply.dislikes = false;
    }
  };

  function expandTextArea() {
    isExpanded.value = true;
  }
  function collapseTextArea() {
    if (text_new_comments.value.trim() === '') {
      isExpanded.value = false;
    }
  }

  return {
    updateLikes,
    updateDisLikes,
    updateReplyLikes,
    updateReplyDislikes,
    expandTextArea,
    collapseTextArea,
  };
}