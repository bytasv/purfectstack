---
to: source/client/components/index.js
inject: true
append: true
skip_if: <%= name %>
---
export { default as <%= name %> } from 'components/<%= name %>'
