module.exports = function extractUpperIdea (FIdeaId, ideas) {
  let mentionToIdea = []
  let nextMentionToIdea
  while (FIdeaId) {
    nextMentionToIdea = ideas.find(function (idea) {
      return idea.is_mentiond === FIdeaId
    })

    if (nextMentionToIdea) {
      mentionToIdea.push(nextMentionToIdea)
      FIdeaId = nextMentionToIdea.id
    } else {
      FIdeaId = null
    }
  }

  console.log('extractMentionTo is ↓')
  console.log(mentionToIdea)
  return mentionToIdea
}
