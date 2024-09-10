# TO-DO

```markdown
TEST STORIES

- with many comments -> 41341353
- with body/text -> 41482793
```

## Pending

- [ ] Collapse comments (and children).
- [ ] Subscribing to comments.
  - Resources:
    - Alert bot for Telegram - [HackerNews-Alert-Bot](https://github.com/lawxls/HackerNews-Alerts-Bot)
- [ ] Research on Firebase usage.
  - [ ] https://firebase.google.com/docs/database/rest/retrieve-data
- [ ] Get user karma (https://stackoverflow.com/questions/40713269/is-there-a-more-efficient-method-to-call-the-hacker-news-api)

## Complete

- [x] `2024.09.09` Handle stories with body/text.
- [x] `2024.09.05` Manage the Job story type.
  - [x] Remove voting
  - [x] Remove comments
  - [x] On navigate straight to link on card tap for job stories.
- [x] `2024.09.05` Add toggle to open links in app or default browser.
- [x] `2024.09.05` Redesign the UI for a comment to use depth for indentation.
- [x] `2024.09.05` Setup Sentry for error tracking.
- [x] `2024.09.04` Refactored story fetching and comment rendering to improve performance.
- [x] `2024.08.21` Setup default comment sorting options.
  - [x] By HN karma algorithm.
  - [x] By date ascending and descending

```javascript
function countTotalReplies(comments) {
  let total = 0;
  for (const comment of comments) {
    total += 1; // Count the current comment
    if (comment.children && Array.isArray(comment.children)) {
      total += countTotalReplies(comment.children); // Recursively count children
    }
  }
  return total;
}
```
