//TODO configure dontenv from https://www.npmjs.com/package/dotenv

export const BASE_URL = "http://dataservice.accuweather.com";
export const API_KEY = "gh0hYoIGWaQzhHaYCLXhXH5vFYEALm6h";




export const basicDummyData = [
    {
      "Version": 1,
      "Key": "215854",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Tel Aviv",
      "EnglishName": "Tel Aviv",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "MEA",
        "LocalizedName": "Middle East",
        "EnglishName": "Middle East"
      },
      "Country": {
        "ID": "IL",
        "LocalizedName": "Israel",
        "EnglishName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv",
        "EnglishName": "Tel Aviv",
        "Level": 1,
        "LocalizedType": "District",
        "EnglishType": "District",
        "CountryID": "IL"
      },
      "TimeZone": {
        "Code": "IST",
        "Name": "Asia/Jerusalem",
        "GmtOffset": 2,
        "IsDaylightSaving": false,
        "NextOffsetChange": "2023-03-24T00:00:00Z"
      },
      "GeoPosition": {
        "Latitude": 32.045,
        "Longitude": 34.77,
        "Elevation": {
          "Metric": {
            "Value": 34,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 111,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "DailyPollenForecast",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast"
      ]
    }
  ]


export const dummy_data = {
    "Headline": {
      "EffectiveDate": "2022-11-22T13:00:00+01:00",
      "EffectiveEpochDate": 1669118400,
      "Severity": 2,
      "Text": "High winds, with gusts past 35 mph, from Tuesday afternoon into Wednesday morning; winds will be locally damaging",
      "Category": "wind",
      "EndDate": "2022-11-23T13:00:00+01:00",
      "EndEpochDate": 1669204800,
      "MobileLink": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?lang=en-us",
      "Link": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2022-11-22T07:00:00+01:00",
        "EpochDate": 1669096800,
        "Temperature": {
          "Minimum": {
            "Value": 85,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 75,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 15,
          "IconPhrase": "Thunderstorms",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate"
        },
        "Night": {
          "Icon": 41,
          "IconPhrase": "Partly cloudy w/ t-storms",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Heavy"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?day=1&lang=en-us",
        "Link": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?day=1&lang=en-us"
      }
    ]
  };

  export const fiveDaysDummyData = {
    "Headline": {
      "EffectiveDate": "2022-11-26T04:00:00+01:00",
      "EffectiveEpochDate": 1669431600,
      "Severity": 3,
      "Text": "Rain and thunderstorms before dawn Saturday through Sunday evening",
      "Category": "thunderstorm",
      "EndDate": "2022-11-28T01:00:00+01:00",
      "EndEpochDate": 1669593600,
      "MobileLink": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?lang=en-us",
      "Link": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2022-11-24T07:00:00+01:00",
        "EpochDate": 1669269600,
        "Temperature": {
          "Minimum": {
            "Value": 90,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 80,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 3,
          "IconPhrase": "Partly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?day=1&lang=en-us",
        "Link": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?day=1&lang=en-us"
      },
      {
        "Date": "2022-11-25T07:00:00+01:00",
        "EpochDate": 1669356000,
        "Temperature": {
          "Minimum": {
            "Value": 57,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 66,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 6,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?day=2&lang=en-us",
        "Link": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?day=2&lang=en-us"
      },
      {
        "Date": "2022-11-26T07:00:00+01:00",
        "EpochDate": 1669442400,
        "Temperature": {
          "Minimum": {
            "Value": 54,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 65,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 15,
          "IconPhrase": "Thunderstorms",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate"
        },
        "Night": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Heavy"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?day=3&lang=en-us",
        "Link": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?day=3&lang=en-us"
      },
      {
        "Date": "2022-11-27T07:00:00+01:00",
        "EpochDate": 1669528800,
        "Temperature": {
          "Minimum": {
            "Value": 53,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 64,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 18,
          "IconPhrase": "Rain",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?day=4&lang=en-us",
        "Link": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?day=4&lang=en-us"
      },
      {
        "Date": "2022-11-28T07:00:00+01:00",
        "EpochDate": 1669615200,
        "Temperature": {
          "Minimum": {
            "Value": 55,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 64,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 7,
          "IconPhrase": "Cloudy",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?day=5&lang=en-us",
        "Link": "http://www.accuweather.com/en/it/cruillas/215284/daily-weather-forecast/215284?day=5&lang=en-us"
      }
    ]
  }