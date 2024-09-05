# TO-DO

TEST STORY - 41341353
sntrys*eyJpYXQiOjE3MjU0ODIwMjAuMDY1MjgxLCJ1cmwiOiJodHRwczovL3NlbnRyeS5pbyIsInJlZ2lvbl91cmwiOiJodHRwczovL2RlLnNlbnRyeS5pbyIsIm9yZyI6Im92ZXJzdGFjay1udSJ9*+uPDWoimYiBM9gQdDxETh8+rKvan/MILFyHd0dY+YLg

## Pending

- [ ] Redesign the UI for a comment to use depth for indentation.
- [ ] Subscribing to comments.
  - Resources:
    - Alert bot for Telegram - [HackerNews-Alert-Bot](https://github.com/lawxls/HackerNews-Alerts-Bot)
- [ ] Research on Firebase usage.
  - [ ] https://firebase.google.com/docs/database/rest/retrieve-data
- [ ] Get user karma (https://stackoverflow.com/questions/40713269/is-there-a-more-efficient-method-to-call-the-hacker-news-api)

## Complete

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
