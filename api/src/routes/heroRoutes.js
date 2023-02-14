import {
  addNewHero,
  getHeroes,
  getHeroWithID,
  updateHero,
  deleteHero,
  searchHeroes,
} from "../controllers/heroController";

const routes = (app) => {
  app.route("/api/hero").get(getHeroes).post(addNewHero);

  app
    .route("/api/hero/:heroid")
    .get(getHeroWithID)
    .put(updateHero)
    .delete(deleteHero);

  app.route("/api/search/:searchTerm").get(searchHeroes);
};

export default routes;
