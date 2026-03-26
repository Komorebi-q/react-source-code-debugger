// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
var NODE_ENV = process.env.NODE_ENV;
var __DEV__ = NODE_ENV === "development";
var vite_config_default = defineConfig({
  resolve: {
    alias: [
      {
        find: /^react$/,
        replacement: path.resolve("/Users/komorebi/Workspace/@komo/fe/react/react-debug/react-debugger", "./packages/react")
      },
      {
        find: /^react-dom$/,
        replacement: path.resolve("/Users/komorebi/Workspace/@komo/fe/react/react-debug/react-debugger", "./packages/react-dom")
      },
      {
        find: /^scheduler$/,
        replacement: path.resolve("/Users/komorebi/Workspace/@komo/fe/react/react-debug/react-debugger", "./packages/scheduler")
      },
      {
        find: /^react\/(.*)$/,
        replacement: path.resolve("/Users/komorebi/Workspace/@komo/fe/react/react-debug/react-debugger", "./packages/react/$1")
      },
      {
        find: /^react-dom\/(.*)$/,
        replacement: path.resolve("/Users/komorebi/Workspace/@komo/fe/react/react-debug/react-debugger", "./packages/react-dom/$1")
      },
      {
        find: /^shared\/ReactSharedInternals$/,
        replacement: path.resolve("/Users/komorebi/Workspace/@komo/fe/react/react-debug/react-debugger", "./packages/react/src/ReactSharedInternalsClient.js")
      },
      {
        find: /^shared\/ReactDOMSharedInternals$/,
        replacement: path.resolve("/Users/komorebi/Workspace/@komo/fe/react/react-debug/react-debugger", "./packages/react-dom/src/ReactDOMSharedInternals.js")
      },
      {
        find: /^shared\/(.*)$/,
        replacement: path.resolve("/Users/komorebi/Workspace/@komo/fe/react/react-debug/react-debugger", "./packages/shared/$1")
      },
      {
        find: /^react-dom-bindings\/(.*)$/,
        replacement: path.resolve("/Users/komorebi/Workspace/@komo/fe/react/react-debug/react-debugger", "./packages/react-dom-bindings/$1")
      },
      {
        find: /^react-reconciler\/(.*)$/,
        replacement: path.resolve("/Users/komorebi/Workspace/@komo/fe/react/react-debug/react-debugger", "./packages/react-reconciler/$1")
      },
      {
        find: /^react-client\/(.*)$/,
        replacement: path.resolve("/Users/komorebi/Workspace/@komo/fe/react/react-debug/react-debugger", "./packages/react-client/$1")
      }
    ],
    preserveSymlinks: true
  },
  optimizeDeps: {
    include: ["shared/ReactSharedInternals"],
    exclude: ["react"]
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
    __IS_NATIVE__: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5jb25zdCBOT0RFX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuY29uc3QgX19ERVZfXyA9IE5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCI7XG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIC8vIFx1NUYxNVx1NzUyOFx1NTczMFx1NTc0MFx1NjMwN1x1NTQxMVx1NjcyQ1x1NTczMFxuICAgIGFsaWFzOiBbXG4gICAgICAvLyBpbXBvcnQge30gZnJvbSAncmVhY3QnXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IC9ecmVhY3QkLyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShcIi9Vc2Vycy9rb21vcmViaS9Xb3Jrc3BhY2UvQGtvbW8vZmUvcmVhY3QvcmVhY3QtZGVidWcvcmVhY3QtZGVidWdnZXJcIiwgXCIuL3BhY2thZ2VzL3JlYWN0XCIpLFxuICAgICAgfSxcbiAgICAgIC8vIGltcG9ydCB7fSBmcm9tICdyZWFjdC1kb20nO1xuICAgICAge1xuICAgICAgICBmaW5kOiAvXnJlYWN0LWRvbSQvLFxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKFwiL1VzZXJzL2tvbW9yZWJpL1dvcmtzcGFjZS9Aa29tby9mZS9yZWFjdC9yZWFjdC1kZWJ1Zy9yZWFjdC1kZWJ1Z2dlclwiLCBcIi4vcGFja2FnZXMvcmVhY3QtZG9tXCIpLFxuICAgICAgfSxcbiAgICAgIC8vIGltcG9ydCB7fSBmcm9tICdzY2hlZHVsZXInO1xuICAgICAge1xuICAgICAgICBmaW5kOiAvXnNjaGVkdWxlciQvLFxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKFwiL1VzZXJzL2tvbW9yZWJpL1dvcmtzcGFjZS9Aa29tby9mZS9yZWFjdC9yZWFjdC1kZWJ1Zy9yZWFjdC1kZWJ1Z2dlclwiLCBcIi4vcGFja2FnZXMvc2NoZWR1bGVyXCIpLFxuICAgICAgfSxcbiAgICAgIC8vIGltcG9ydCB7fSBmcm9tICdyZWFjdC8/JztcbiAgICAgIHtcbiAgICAgICAgZmluZDogL15yZWFjdFxcLyguKikkLyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShcIi9Vc2Vycy9rb21vcmViaS9Xb3Jrc3BhY2UvQGtvbW8vZmUvcmVhY3QvcmVhY3QtZGVidWcvcmVhY3QtZGVidWdnZXJcIiwgXCIuL3BhY2thZ2VzL3JlYWN0LyQxXCIpLFxuICAgICAgfSxcbiAgICAgIC8vIGltcG9ydCB7fSBmcm9tICdyZWFjdC1kb20vPyc7XG4gICAgICB7XG4gICAgICAgIGZpbmQ6IC9ecmVhY3QtZG9tXFwvKC4qKSQvLFxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKFwiL1VzZXJzL2tvbW9yZWJpL1dvcmtzcGFjZS9Aa29tby9mZS9yZWFjdC9yZWFjdC1kZWJ1Zy9yZWFjdC1kZWJ1Z2dlclwiLCBcIi4vcGFja2FnZXMvcmVhY3QtZG9tLyQxXCIpLFxuICAgICAgfSxcbiAgICAgIC8vIGltcG9ydCB7fSBmcm9tICdzaGFyZWQvPyc7XG4gICAgICB7XG4gICAgICAgIGZpbmQ6IC9ec2hhcmVkXFwvUmVhY3RTaGFyZWRJbnRlcm5hbHMkLyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShcbiAgICAgICAgICBcIi9Vc2Vycy9rb21vcmViaS9Xb3Jrc3BhY2UvQGtvbW8vZmUvcmVhY3QvcmVhY3QtZGVidWcvcmVhY3QtZGVidWdnZXJcIixcbiAgICAgICAgICBcIi4vcGFja2FnZXMvcmVhY3Qvc3JjL1JlYWN0U2hhcmVkSW50ZXJuYWxzQ2xpZW50LmpzXCIsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiAvXnNoYXJlZFxcL1JlYWN0RE9NU2hhcmVkSW50ZXJuYWxzJC8sXG4gICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoXG4gICAgICAgICAgXCIvVXNlcnMva29tb3JlYmkvV29ya3NwYWNlL0Brb21vL2ZlL3JlYWN0L3JlYWN0LWRlYnVnL3JlYWN0LWRlYnVnZ2VyXCIsXG4gICAgICAgICAgXCIuL3BhY2thZ2VzL3JlYWN0LWRvbS9zcmMvUmVhY3RET01TaGFyZWRJbnRlcm5hbHMuanNcIixcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IC9ec2hhcmVkXFwvKC4qKSQvLFxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKFwiL1VzZXJzL2tvbW9yZWJpL1dvcmtzcGFjZS9Aa29tby9mZS9yZWFjdC9yZWFjdC1kZWJ1Zy9yZWFjdC1kZWJ1Z2dlclwiLCBcIi4vcGFja2FnZXMvc2hhcmVkLyQxXCIpLFxuICAgICAgfSxcbiAgICAgIC8vIGltcG9ydCB7fSBmcm9tICdyZWFjdC1kb20tYmluZGluZ3MvPyc7XG4gICAgICB7XG4gICAgICAgIGZpbmQ6IC9ecmVhY3QtZG9tLWJpbmRpbmdzXFwvKC4qKSQvLFxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKFxuICAgICAgICAgIFwiL1VzZXJzL2tvbW9yZWJpL1dvcmtzcGFjZS9Aa29tby9mZS9yZWFjdC9yZWFjdC1kZWJ1Zy9yZWFjdC1kZWJ1Z2dlclwiLFxuICAgICAgICAgIFwiLi9wYWNrYWdlcy9yZWFjdC1kb20tYmluZGluZ3MvJDFcIixcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICAvLyBpbXBvcnQge30gZnJvbSAncmVhY3QtcmVjb25jaWxlci8/JztcbiAgICAgIHtcbiAgICAgICAgZmluZDogL15yZWFjdC1yZWNvbmNpbGVyXFwvKC4qKSQvLFxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKFwiL1VzZXJzL2tvbW9yZWJpL1dvcmtzcGFjZS9Aa29tby9mZS9yZWFjdC9yZWFjdC1kZWJ1Zy9yZWFjdC1kZWJ1Z2dlclwiLCBcIi4vcGFja2FnZXMvcmVhY3QtcmVjb25jaWxlci8kMVwiKSxcbiAgICAgIH0sXG4gICAgICAvLyBpbXBvcnQge30gZnJvbSAncmVhY3QtY2xpZW50Lz8nO1xuICAgICAge1xuICAgICAgICBmaW5kOiAvXnJlYWN0LWNsaWVudFxcLyguKikkLyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShcIi9Vc2Vycy9rb21vcmViaS9Xb3Jrc3BhY2UvQGtvbW8vZmUvcmVhY3QvcmVhY3QtZGVidWcvcmVhY3QtZGVidWdnZXJcIiwgXCIuL3BhY2thZ2VzL3JlYWN0LWNsaWVudC8kMVwiKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBwcmVzZXJ2ZVN5bWxpbmtzOiB0cnVlLFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICAvLyBcdThGRDlcdTkxQ0NcdTY2MkZcdTRFM0FcdTRFODYgdml0ZSBcdTYzRDBcdTUyNERcdTdGMTZcdThCRDFcdUZGMENcdThGRDBcdTg4NENcdTk3MDBcdTg5ODEgUmVhY3RTaGFyZWRJbnRlcm5hbCBcdTUzRDhcdTkxQ0ZcdTVCRjlcdThDNjFcdUZGMDhcdTYzRDBcdTUyNERcdTU4RjBcdTY2MEVcdUZGMDlcbiAgICBpbmNsdWRlOiBbXCJzaGFyZWQvUmVhY3RTaGFyZWRJbnRlcm5hbHNcIl0sXG4gICAgLy8gcmVhY3QgXHU0RTBEXHU5NzAwXHU4OTgxXHU3RjE2XHU4QkQxXG4gICAgLy8gXHU0RjdGXHU3NTI4IEB2aXRlanMvcGx1Z2luLXJlYWN0XHVGRjBDXHU2QjY0XHU1OTA0XHU5MTREXHU3RjZFXHU0RTBEXHU2NTJGXHU2MzAxXHVGRjBDXHU2MkE1XHU5NTE5XG4gICAgZXhjbHVkZTogW1wicmVhY3RcIl0sXG4gIH0sXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgZGVmaW5lOiB7XG4gICAgX19ERVZfXyxcbiAgICBfX0VYUEVSSU1FTlRBTF9fOiB0cnVlLFxuICAgIF9fRVhURU5TSU9OX186IGZhbHNlLFxuICAgIF9fUFJPRklMRV9fOiBmYWxzZSxcbiAgICBfX1RFU1RfXzogTk9ERV9FTlYgPT09IFwidGVzdFwiLFxuICAgIF9fSVNfQ0hST01FX186IGZhbHNlLFxuICAgIF9fSVNfRklSRUZPWF9fOiBmYWxzZSxcbiAgICBfX0lTX0VER0VfXzogZmFsc2UsXG4gICAgX19JU19OQVRJVkVfXzogZmFsc2UsXG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU0sV0FBVyxRQUFRLElBQUk7QUFDN0IsSUFBTSxVQUFVLGFBQWE7QUFHN0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBRVAsT0FBTztBQUFBLE1BRUw7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLHVFQUF1RSxrQkFBa0I7QUFBQSxNQUNySDtBQUFBLE1BRUE7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLHVFQUF1RSxzQkFBc0I7QUFBQSxNQUN6SDtBQUFBLE1BRUE7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLHVFQUF1RSxzQkFBc0I7QUFBQSxNQUN6SDtBQUFBLE1BRUE7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLHVFQUF1RSxxQkFBcUI7QUFBQSxNQUN4SDtBQUFBLE1BRUE7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLHVFQUF1RSx5QkFBeUI7QUFBQSxNQUM1SDtBQUFBLE1BRUE7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUNoQix1RUFDQSxvREFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFDaEIsdUVBQ0EscURBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsdUVBQXVFLHNCQUFzQjtBQUFBLE1BQ3pIO0FBQUEsTUFFQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQ2hCLHVFQUNBLGtDQUNGO0FBQUEsTUFDRjtBQUFBLE1BRUE7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLHVFQUF1RSxnQ0FBZ0M7QUFBQSxNQUNuSTtBQUFBLE1BRUE7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLHVFQUF1RSw0QkFBNEI7QUFBQSxNQUMvSDtBQUFBLElBQ0Y7QUFBQSxJQUNBLGtCQUFrQjtBQUFBLEVBQ3BCO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFFWixTQUFTLENBQUMsNkJBQTZCO0FBQUEsSUFHdkMsU0FBUyxDQUFDLE9BQU87QUFBQSxFQUNuQjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOO0FBQUEsSUFDQSxrQkFBa0I7QUFBQSxJQUNsQixlQUFlO0FBQUEsSUFDZixhQUFhO0FBQUEsSUFDYixVQUFVLGFBQWE7QUFBQSxJQUN2QixlQUFlO0FBQUEsSUFDZixnQkFBZ0I7QUFBQSxJQUNoQixhQUFhO0FBQUEsSUFDYixlQUFlO0FBQUEsRUFDakI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
