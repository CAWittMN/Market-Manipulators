import companies from "./companies/companies";
import months from "./months/months";
import objectMap from "./helpers/objectMap";
const fs = require("fs");

class GameApi {
  static companies = companies;
  static months = months;

  static Manipulate(
    prevMonth,
    marketCard,
    manipulationCards,
    change,
    betaMods = {},
    deltaMods = {}
  ) {
    const monthIdx =
      this.months.findIndex((month) => month == prevMonth.month) + 1;

    const newMonth = {
      month: this.months[monthIdx],
      companies: objectMap(this.companies, (company, name) => {
        const beta = betaMods[name] ? betaMods[name] : company.beta;
        const delta = deltaMods[name] ? deltaMods[name] : change;
        const prevPrice = prevMonth.company[name].price;
        const newPrice = prevPrice * (delta * beta);
        return {
          price: newPrice,
          gain: prevPrice < newPrice,
          deltaMod: deltaMods[name] ? deltaMods[name] : null,
          betaMod: betaMods[name] ? betaMods[name] : null,
        };
      }),
      marketCard: marketCard,
      manipulationCards: manipulationCards,
    };
    return newMonth;
  }

  static readGames() {}
  static saveGame(data) {
    fs.writeFileSync();
  }
  static newGame(options) {
    const newGame = {
      createdAt: Date.now(),
      numPlayers: options.numPlayers,
      numMonths: this.setNumMonths(options.numPlayers),
      months: [
        {
          month: this.months[0],
          companies: objectMap(this.companies, (company) => {
            return {
              price: company.price,
              gain: null,
              deltaMod: null,
              betaMod: null,
            };
          }),
          marketCard: [],
          manipulationCards: [],
        },
      ],
    };
    this.saveGame(newGame);
    return newGame;
  }
  static setNumMonths(numPlayers) {
    if (null) {
      return;
    } else if (null) {
      return;
    }
  }
}

export default GameApi;
