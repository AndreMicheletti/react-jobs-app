
export type Tag = {
    id: string,
    name: string
}

export type Commitment = {
    title: string
}

export type Company = {
    id: string,
    name: string,
    slug: string,
    logoUrl: string
}

export type SelectedJob = {
    jobSlug: string,
    companySlug: string
}

export type Job = {
    id: string,
    title: string,
    slug: string,
    locationNames: string,
    company: Company,
    tags: Array<Tag>,
    commitment: Commitment,
    postedAt: string,
    updatedAt: string,
}

export type DetailedJob = {
    id: string,
    title: string,
    slug: string,
    description: string,
    locationNames: string,
    company: Company,
    tags: Array<Tag>,
    commitment: Commitment,
    isFeatured: boolean,
    postedAt: string,
    updatedAt: string,
    applyUrl: string,
}