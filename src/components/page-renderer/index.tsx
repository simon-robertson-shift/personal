import { ArticlesElement } from "@/components/page-elements/articles-element"
import { CodeElement } from "@/components/page-elements/code-element"
import { HeadingElement } from "@/components/page-elements/heading-element"
import { ImageElement } from "@/components/page-elements/image-element"
import { ListElement } from "@/components/page-elements/list-element"
import { TextElement } from "@/components/page-elements/text-element"

import { PageElement, PageElementType, PageMetadata, fetchPageElementsForSlug } from "@/data/pages"

import Link from "next/link"

import { Fragment, FunctionComponent } from "react"

import css from "./index.module.css"

type Props = {
    readonly metadata: PageMetadata
    readonly wideContent: boolean
}

const elementComponents: Record<
    PageElementType,
    FunctionComponent<{ data: PageElement["data"] }>
> = {
    articles: ArticlesElement,
    code: CodeElement,
    heading: HeadingElement,
    image: ImageElement,
    list: ListElement,
    text: TextElement
}

export async function PageRenderer({ metadata, wideContent }: Props) {
    const elements = await fetchPageElementsForSlug(metadata.slug)

    const content = elements.map((element, key) => {
        const Component = elementComponents[element.type]

        if (Component === undefined) {
            throw new Error(`Unknown page element type: ${element.type}`)
        }

        return <Component key={key} data={element.data} />
    })

    return (
        <Fragment>
            <nav className={css.navigation}>
                <Link href="/" title="Simon Robertson">
                    Simon Robertson
                </Link>
            </nav>
            <article className={css.article}>
                <header className={css.header} style={{ backgroundColor: metadata.color }}>
                    <h1 className={css.title}>{metadata.title}</h1>
                    <em className={css.description}>{metadata.description}</em>
                </header>
                <div className={`${css.content} ${wideContent ? css.wide : ""}`}>{content}</div>
            </article>
            <footer className={css.footer}></footer>
        </Fragment>
    )
}
