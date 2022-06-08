interface Game {
    id?: number,
    name: string,
    releaseYear: number,
    sales: number
}

interface ArticleItem {
    id?: number,
    image: string,
    mainTag: string,
    mainTagColor: string,
    mainTagBackgroundColor: string,
    minutesRead: number,
    title: string,
    intro: string
}

export type { Game, ArticleItem }