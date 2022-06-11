interface ArticleItem {
    id?: number,
    date: string,
    image: string,
    mainTag: string,
    mainTagColor: string,
    mainTagBackgroundColor: string,
    minutesRead: number,
    title: string,
    intro: string,
    subtitleFirst: string,
    paragraphFirst: string,
    imageSecond: string,
    subtitleSecond: string,
    paragraphSecond: string,
    publisher: string
}

interface BenefitItem {
    id?: number,
    icon: string,
    title: string,
    paragraph: string
}

interface PlatformItemType {
    id?: number,
    title: string,
    paragraph: string
}

interface DriverItem {
    id?: number,
    image: string,
    raceNumber: number,
    points: number,
    team: string,
    teamLogo: string,
    firstName: string,
    lastName: string,
    //driverLogo: string | null,
    //driverWebsite: string | null,
    age: number,
    experience: number,
    worldChampionships: number,
    fastestLaps: number,
    polePositions: number,
    nationality: string,
    countryFlag: string,
    twitter: string | null,
    facebook: string | null,
    instagram: string | null
}

export type { ArticleItem, BenefitItem, PlatformItemType, DriverItem }