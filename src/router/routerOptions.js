import Home from "../components/Home";
import Details from "../components/Details";
import Search from "../components/Search";

export default {
  routes: [
    {
      path: "/",
      component: Home
    },
    { 
      path: "/character/:id", 
      component: Details },
    {
      path: "/search/:term?",
      component: Search
    }
  ],
  mode: "history"
};
