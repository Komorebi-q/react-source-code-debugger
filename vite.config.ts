import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const NODE_ENV = process.env.NODE_ENV;
const __DEV__ = NODE_ENV === "development";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    // 引用地址指向本地
    alias: [
      // import {} from 'react'
      {
        find: /^react$/,
        replacement: path.resolve(__dirname, "./packages/react"),
      },
      // import {} from 'react-dom';
      {
        find: /^react-dom$/,
        replacement: path.resolve(__dirname, "./packages/react-dom"),
      },
      // import {} from 'scheduler';
      {
        find: /^scheduler$/,
        replacement: path.resolve(__dirname, "./packages/scheduler"),
      },
      // import {} from 'react/?';
      {
        find: /^react\/(.*)$/,
        replacement: path.resolve(__dirname, "./packages/react/$1"),
      },
      // import {} from 'react-dom/?';
      {
        find: /^react-dom\/(.*)$/,
        replacement: path.resolve(__dirname, "./packages/react-dom/$1"),
      },
      // import {} from 'shared/?';
      {
        find: /^shared\/ReactSharedInternals$/,
        replacement: path.resolve(
          __dirname,
          "./packages/react/src/ReactSharedInternalsClient.js",
        ),
      },
      {
        find: /^shared\/ReactDOMSharedInternals$/,
        replacement: path.resolve(
          __dirname,
          "./packages/react-dom/src/ReactDOMSharedInternals.js",
        ),
      },
      {
        find: /^shared\/(.*)$/,
        replacement: path.resolve(__dirname, "./packages/shared/$1"),
      },
      // import {} from 'react-dom-bindings/?';
      {
        find: /^react-dom-bindings\/(.*)$/,
        replacement: path.resolve(
          __dirname,
          "./packages/react-dom-bindings/$1",
        ),
      },
      // import {} from 'react-reconciler/?';
      {
        find: /^react-reconciler\/(.*)$/,
        replacement: path.resolve(__dirname, "./packages/react-reconciler/$1"),
      },
      // import {} from 'react-client/?';
      {
        find: /^react-client\/(.*)$/,
        replacement: path.resolve(__dirname, "./packages/react-client/$1"),
      },
    ],
    preserveSymlinks: true,
  },
  optimizeDeps: {
    // 这里是为了 vite 提前编译，运行需要 ReactSharedInternal 变量对象（提前声明）
    include: ["shared/ReactSharedInternals"],
    // react 不需要编译
    // 使用 @vitejs/plugin-react，此处配置不支持，报错
    exclude: ["react"],
  },
  plugins: [react()],
  define: {
    __DEV__,
    __EXPERIMENTAL__: true,
    __EXTENSION__: false,
    __PROFILE__: false,
    __TEST__: NODE_ENV === "test",
    __IS_CHROME__: false,
    __IS_FIREFOX__: false,
    __IS_EDGE__: false,
    __IS_NATIVE__: false,
  }
});
