import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import About from "./DatasPage/About";
import AppUpdatePage from "./DatasPage/AppUpdatePage";
import FeaturesPage from "./DatasPage/FeaturesPage";
import FitnessPage from "./DatasPage/FitnessPage";
import KnowYourselfPage from "./DatasPage/KnowYourselfPage";
import NutritionPage from "./DatasPage/NutritionPage";
import RecentPostPage from "./DatasPage/RecentPostPage";
import RecipesPage from "./DatasPage/RecipesPage";
import SearchPage from "./DatasPage/SearchPage";
import TipsPage from "./DatasPage/TipsPage";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/recentPost" element={<RecentPostPage />} />
      <Route path="/blog/nutrition" element={<NutritionPage />} />
      <Route path="/blog/fitness" element={<FitnessPage />} />
      <Route path="/blog/recipes" element={<RecipesPage />} />
      <Route path="/blog/appUpdate" element={<AppUpdatePage />} />
      <Route path="/blog/features" element={<FeaturesPage />} />
      <Route path="/blog/tips" element={<TipsPage />} />
      <Route path="/blog/knowYourself" element={<KnowYourselfPage />} />
      <Route path="/blog/search" element={<SearchPage />} />
      <Route path="/About us" element={<About />} />
    </Routes>
  );
}
