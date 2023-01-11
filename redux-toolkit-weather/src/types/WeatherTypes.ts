export interface City {
    EnglishName: string
    Country: Country
    GeoPosition: GeoPosition
}
interface Country {
    LocalizedName: string
    ID: string
}
interface GeoPosition {
    Latitude: number
    Longitude: number
}

export interface DailyForcastData {
    DailyForecasts: DailyForcast
    Headline: Headline
}
export interface WeeklyForcastData {
    DailyForecasts: DailyForcast[]
    Headline: Headline
}
export interface DailyForcast {
    Date: string
    Day: DayOrNight
    Night: DayOrNight
    Temperature: Temperature
}
interface DayOrNight {
    IconPhrase: string
}
interface Temperature {
    Maximum: {
        Unit: string
        Value: number
    }
    Minimum: {
        Unit: string
        Value: number
    }
}
interface Headline {
    Category: string
    EffectiveDate: string
    Text: string
}

