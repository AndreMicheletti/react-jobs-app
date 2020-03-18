
export type Tag = {
    id: String,
    name: String
}

export type Commitment = {
    title: String
}

export type Company = {
    id: String,
    name: String,
    logoUrl: String
}

export type Job = {
    id: String,
    title: String,
    locationNames: String,
    company: Company,
    tags: Array<Tag>,
    commitment: Commitment,
    isFeatured: boolean,
    postedAt: String,
    updatedAt: String,
}

export type DetailedJob = {
    id: String,
    title: String,
    slug: String,
    locationNames: String,
    company: Company,
    tags: Array<Tag>,
    commitment: Commitment,
    description: String,
    isFeatured: boolean,
    postedAt: String,
    updatedAt: String,
    applyUrl: String
}