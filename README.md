# Run
`nvm use && nvm i && npm run dev`

# Test
`nvm use && nvm i && npm test`

Running the tests gives this error:

> FAIL  `src/__tests__/App.test.tsx [ src/__tests__/App.test.tsx ]`  
> Error: `require()` of ES Module `.../react-konva-vitest/node_modules/konva/lib/Core.js` from `.../react-konva-vitest/node_modules/react-konva/lib/ReactKonvaCore.js` not supported.  
> Instead change the require of `Core.js` in `.../react-konva-vitest/node_modules/react-konva/lib/ReactKonvaCore.js` to a dynamic `import()` which is available in all CommonJS modules.


