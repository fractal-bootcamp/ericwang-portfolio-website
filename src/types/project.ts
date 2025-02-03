type Image = {
    alt?: string,
    asset: {
        url?: string,
        _ref?: string
    }
}

export type Project = {
    name: string,
    description: string,
    year: string,
    image: Image,
    skills: string[],
    link: string
}