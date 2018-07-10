module.exports = function extractUnderIdea (FIdeaId, ideas) {
  let mentiondIdea = []
  let nextMentiondIdea
  while (FIdeaId) {
    nextMentiondIdea = ideas.find(function (idea) {
      return idea.is_mention_to === FIdeaId
    })

    if (nextMentiondIdea) {
      mentiondIdea.push(nextMentiondIdea)
      FIdeaId = nextMentiondIdea.id
    } else {
      FIdeaId = null
    }
  }

  console.log('extractMentiondIdea is ↓')
  console.log(mentiondIdea)
  return mentiondIdea
}
