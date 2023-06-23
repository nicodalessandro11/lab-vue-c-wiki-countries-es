const countries = ref([]);
let capital = ref("");
let area = ref("");
let countryName = ref("");
let countryCodeImage = ref("");
let borderList = ref([]);
let borderListNames = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch("../public/countries.json");
    const data = await response.json();
    countries.value = data;
    const filteredCountry = countries.value.filter(
      (country) => country.alpha3Code === countryCode.value
    );
    capital.value = filteredCountry[0].capital[0];
    area.value = filteredCountry[0].area;
    countryName.value = filteredCountry[0].name.common;
    countryCodeImage.value = filteredCountry[0].alpha2Code.toLowerCase();
    borderList.value = filteredCountry[0].borders;
    console.log(borderList.value);
    borderListNames.value = borderList.value.map((borderCountryCode) => {
      const borderCountry = countries.value.find(
        (country) => country.alpha3Code === borderCountryCode
      );
      return borderCountry ? borderCountry.name.common : "";
    });
  } catch (error) {
    console.log(error);
  }
};

fetchData();
