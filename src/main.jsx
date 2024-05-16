import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as service from "./service/productService.js";
import PublicRoutes from "./routes/publicRoutes.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
//
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: service.getAllProducts(1, 8),
    },
  },
});
//
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <PublicRoutes></PublicRoutes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </Provider>
);
