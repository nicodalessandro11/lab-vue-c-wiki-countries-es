import { defineStore } from "pinia";
import axios from "axios";

export const useCountryStore = defineStore("countryStore", {
  state: () => ({
    countries: [],
    currentCountryCode: null,
  }),
  getters: {
    currentCountry() {
      const country = this.countries.find(
        (c) => c.alpha3Code === this.currentCountryCode
      );

      return {
        capital: country.capital[0],
        area: country.area,
        name: country.name.common,
        alpha2Code: country.alpha2Code.toLowerCase(),
        borders: country.borders.map((borderCountryCode) => {
          const borderCountry = this.countries.find(
            (c) => c.alpha3Code === borderCountryCode
          );
          return borderCountry ? borderCountry.name.common : "";
        }),
      };
    },
  },
  actions: {
    async loadCountries() {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries "
      );
      this.countries = response.data;
    },
    setCountryCode(code) {
      this.currentCountryCode = code;
    },
  },
});
