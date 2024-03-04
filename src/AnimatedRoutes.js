import { useLocation, Routes, Route, ScrollRestoration } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Cover } from './components/Cover'
import { Navbar } from './components/Navbar'
import { PageOne } from "./components/PageOne";
import { Article } from "./components/Article";
import { ArticleTwo } from "./components/ArticleTwo";
import { ArticleThree } from "./components/ArticleThree";

const AnimatedRoutes = () => {
  const location = useLocation();


  return (
    <>
      <div className="w-full h-full p-6  relative pt-header bg-gray-100 justify-between dark:bg-zinc-800">
        <AnimatePresence mode="sync">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navbar title="Home" number="1" />} />
            <Route path="/page-one" element={<Navbar title="01 Page one" number="2" />} />
            <Route path="/article" element={<Navbar title="01 Page one" number="2" isArticle="true" />} />
            <Route path="/article-two" element={<Navbar title="01 Page one" number="2" isArticle="true" />} />
            <Route path="/article-three" element={<Navbar title="01 Page one" number="2" isArticle="true" />} />
          </Routes>
        </AnimatePresence>
        <AnimatePresence mode="sync">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Cover />} />
            <Route path="/page-one" element={<PageOne />} />
            <Route path="/article" element={<Article />} />
            <Route path="/article-two" element={<ArticleTwo />} />
            <Route path="/article-three" element={<ArticleThree />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
};

export default AnimatedRoutes;
