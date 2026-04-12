(function () {
  function refreshNav() {
    unreadMarkers.refreshNavBadges({ followedChars, followedDocuments, followedChronicles, chrEntries });
  }

  function characterCardDotHTML(id) {
    return unreadMarkers.cardDotHTML(unreadMarkers.isCharacterUnread(id, false));
  }

  function documentCardDotHTML(id) {
    return unreadMarkers.cardDotHTML(unreadMarkers.isDocumentUnread(id, false));
  }

  function chronicleCardDotHTML(chrId, entryIds) {
    const hasUnreadEntry = unreadMarkers.chronicleHasUnreadEntries(chrId, entryIds, false);
    const showUnread = unreadMarkers.isChronicleUnread(chrId, false) || hasUnreadEntry;
    return unreadMarkers.cardDotHTML(showUnread);
  }

  function entryRowDotHTML(chrId, entryId) {
    return unreadMarkers.entryDotHTML(unreadMarkers.isEntryUnread(chrId, entryId, false));
  }

  function markCharacterOpened(id, isOwn) {
    if (isOwn || !id) return;
    unreadMarkers.markCharacterRead(id);
    refreshNav();
  }

  function markDocumentOpened(id, isOwn) {
    if (isOwn || !id) return;
    unreadMarkers.markDocumentRead(id);
    refreshNav();
  }

  function markChronicleOpened(id, isOwn) {
    if (isOwn || !id) return;
    unreadMarkers.markChronicleRead(id);
    refreshNav();
  }

  function markChronicleEntryOpened(chrId, entryId, isOwn) {
    if (isOwn || !chrId || !entryId) return;
    unreadMarkers.markEntryRead(chrId, entryId);
    refreshNav();
  }

  window.unreadIndicators = {
    refreshNav,
    characterCardDotHTML,
    documentCardDotHTML,
    chronicleCardDotHTML,
    entryRowDotHTML,
    markCharacterOpened,
    markDocumentOpened,
    markChronicleOpened,
    markChronicleEntryOpened
  };
})();
