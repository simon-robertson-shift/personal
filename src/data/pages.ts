import { env } from "@/env"

export type PageElement = {
    readonly type: PageElementType
    readonly data: any // varies based on the element type
}

export type PageElementType = "articles" | "code" | "heading" | "image" | "list" | "text"

export type PageMetadata = {
    readonly title: string
    readonly description: string
    readonly category: string
    readonly color: string
    readonly slug: string
}

export async function fetchPageElementsForSlug(slug: string): Promise<PageElement[]> {
    const file = await fetch(`${env.domain}/data/pages/${slug}.json`, {
        next: {
            revalidate: 60
        }
    })

    return file.json()
}

export async function fetchPageMetadataCollection(): Promise<PageMetadata[]> {
    const file = await fetch(`${env.domain}/data/pages.json`, {
        next: {
            revalidate: 60
        }
    })

    return file.json()
}

export async function fetchPageMetadataForSlug(slug: string): Promise<PageMetadata | undefined> {
    const collection = await fetchPageMetadataCollection()

    return collection.find((data) => {
        return data.slug === slug
    })
}
