# Server-side Rendering React Context Comparison

## Tests

- Legacy, New, Mix, and no react contexts

Built starting from the great work here: https://github.com/raxjs/server-side-rendering-comparison

## Benchmark info

- with `NODE_ENV=production`. `renderToString` both require from `lib` not `dist`
- with about 600 dom nodes

## Run

```bash
# prepare
npm install
npm run webpack

# run renderToString benchmark
NODE_ENV=production node benchmarks/renderToString.js
```
