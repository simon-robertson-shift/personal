import { fetchPageMetadataCollection } from "@/data/pages"

import css from "./index.module.css"

export async function ArticlesElement() {
    const collection = await fetchPageMetadataCollection()

    const conent = collection.map((metadata, key) => {
        if (metadata.slug === "home") {
            return null
        }

        return (
            <a
                className={css.link}
                key={key}
                href={`/${metadata.slug}`}
                title={metadata.title}
                style={{ backgroundColor: metadata.color }}
            >
                <article className={css.article}>
                    <h1 className={css.title}>{metadata.title}</h1>
                    <p className={css.category}>{metadata.category}</p>
                    <p className={css.description}>{metadata.description}</p>
                </article>
            </a>
        )
    })

    return <nav className={css.navigation}>{conent}</nav>
}
