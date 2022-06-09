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

/*interface ArticleItem {
    id?: number,
    image: string,
    mainTag: string,
    mainTagColor: string,
    mainTagBackgroundColor: string,
    minutesRead: number,
    title: string,
    intro: string
}*/

export type { ArticleItem }