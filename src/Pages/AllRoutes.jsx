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
import TipsPage from "./DatasPage/TipsPage";
import SingleAppUpdatePage from "./SingleDataPage/SingleAppUpdatePage";
import SingleFeaturesPage from "./SingleDataPage/SingleFeaturesPage";
import SingleFitnessPage from "./SingleDataPage/SingleFitnessPage";
import SingleKnowYourSelfPage from "./SingleDataPage/SingleKnowYourSelfPage";
import SingleNutritionPage from "./SingleDataPage/SingleNutritionPage";
import SingleRecentPostPage from "./SingleDataPage/SingleRecentPostPage";
import SingleRecipesPage from "./SingleDataPage/SingleRecipesPage";
import SingleSearchPage from "./SingleDataPage/SingleSearchPage";
import SingleTipsPage from "./SingleDataPage/SingleTipsPage";

export function AllRoutes() {
  return (
    <Routes>

      
      


<Route path="/blog" element={<Blog/>} />  


{/* data page routes  */}
<Route path="/blog/recentPost" element={<RecentPostPage/>} />  
<Route path="/blog/nutrition" element={<NutritionPage/>} />  
<Route path="/blog/fitness" element={<FitnessPage/>} />  
<Route path="/blog/features" element={<FeaturesPage/>} /> 
<Route path="/blog/recipes" element={<RecipesPage/>} />  
<Route path="/blog/appUpdate" element={<AppUpdatePage/>} /> 

<Route path="/blog/tips" element={<TipsPage/>} />  
<Route path="/blog/knowYourself" element={<KnowYourselfPage/>} />  
<Route path="/About us" element={<About />} />

{/* single page routes  */}
<Route path="/blog/recentPost/:id" element={<SingleRecentPostPage/>} />
<Route path="/blog/nutrition/:id" element={<SingleNutritionPage/>} />  
<Route path="/blog/fitness/:id" element={<SingleFitnessPage/>} />  
<Route path="/blog/features/:id" element={<SingleFeaturesPage/>} /> 
<Route path="/blog/recipes/:id" element={<SingleRecipesPage/>} />  
<Route path="/blog/appUpdate/:id" element={<SingleAppUpdatePage/>} /> 

<Route path="/blog/tips/:id" element={<SingleTipsPage/>} />  
<Route path="/blog/knowYourself/:id" element={<SingleKnowYourSelfPage/>} /> 
<Route path="/blog/:id" element={<SingleSearchPage/>} />







    </Routes>
  );
}
