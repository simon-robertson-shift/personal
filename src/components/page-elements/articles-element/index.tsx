import { fetchPageMetadataCollection } from "@/data/pages"

export async function ArticlesElement() {
    const collection = await fetchPageMetadataCollection()

    const conent = collection.map((metadata, key) => {
        if (metadata.slug === "home") {
            return null
        }

        return (
            <a key={key} href={`/${metadata.slug}`} title={metadata.title}>
                <article>
                    <h1>{metadata.title}</h1>
                </article>
            </a>
        )
    })

    return <nav>{conent}</nav>
}
