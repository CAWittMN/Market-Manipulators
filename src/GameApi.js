import companies from "./companies/companies";
import months from "./months/months";
import scale from "./scale/scale";
import markets from "./markets/markets";
import objectMap from "./helpers/objectMap";
const fs = require("fs");

class GameApi {
  static companies = companies;
  static months = months;
  static scale = scale;
  static markets = markets;

  static Manipulate(
    prevMonth,
    marketCard,
    manipulationCards,
    roll,
    monthlyBonus,
    betaMods = {},
    deltaMods = {}
  ) {
    const monthIdx =
      this.months.findIndex((month) => month == prevMonth.month) + 1;

    const newMonth = {
      month: this.months[monthIdx],
      companies: objectMap(this.companies, (company, name) => {
        const delta = scale[roll];
        const beta = betaMods[name] ? betaMods[name] : company.beta;
        const deltaMod = deltaMods[name] ? deltaMods[name] : 0;
        const prevPrice = prevMonth.company[name].price;
        let newPrice = prevMonth * (delta * beta + deltaMod + 1);
        return {
          price: newPrice,
          gain: prevPrice < newPrice,
          loss: prevPrice > newPrice,
          deltaMod: deltaMods[name] ? deltaMods[name] : null,
          betaMod: betaMods[name] ? betaMods[name] : null,
        };
      }),
      marketCard: marketCard,
      manipulationCards: manipulationCards,
      monthlyBonus: monthlyBonus,
      marketType: this.getMarketType(),
    };
    return newMonth;
  }

  static readGames() {
    const data = [];
    return data;
  }
  static saveGame(data) {
    fs.writeFileSync();
  }
  static newGame(options) {
    const newGame = {
      createdAt: Date.now(),
      numPlayers: options.numPlayers,
      numMonths: this.getNumMonths(options.numPlayers),
      months: [
        {
          month: this.months[0],
          companies: objectMap(this.companies, (company) => {
            return {
              price: company.price,
              gain: false,
              loss: false,
              deltaMod: null,
              betaMod: null,
            };
          }),
          marketCard: [],
          manipulationCards: [],
          monthlyBonus: options.monthlyBonus,
          marketType: this.markets.something,
        },
      ],
    };
    this.saveGame(newGame);
    return newGame;
  }
  static getNumMonths(numPlayers) {
    if (null) {
      return;
    } else if (null) {
      return;
    }
  }
  static getMarketType;
}

export default GameApi;
