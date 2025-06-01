import { BrowserRouter, Route, Routes } from "react-router";
import { Docs, Examples, Home, Layout } from "@/components/boilerplate";
import NotFound from "@/app/not-found";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
