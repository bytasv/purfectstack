---
to: source/client/pages/index.js
inject: true
append: true
skip_if: <%= name %>
---
export { default as <%= name %> } from 'pages/<%= name %>'
