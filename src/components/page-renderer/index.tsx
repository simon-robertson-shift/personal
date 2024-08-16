import { ArticlesElement } from "@/components/page-elements/articles-element"
import { CodeElement } from "@/components/page-elements/code-element"
import { HeadingElement } from "@/components/page-elements/heading-element"
import { ImageElement } from "@/components/page-elements/image-element"
import { ListElement } from "@/components/page-elements/list-element"
import { TextElement } from "@/components/page-elements/text-element"

import { PageElement, PageElementType, PageMetadata, fetchPageElementsForSlug } from "@/data/pages"

import { Fragment, FunctionComponent } from "react"

type Props = {
    readonly metadata: PageMetadata
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

export async function PageRenderer({ metadata }: Props) {
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
            <nav>
                <a href="/">Simon Robertson</a>
            </nav>
            <article>
                <header>
                    <h1>{metadata.title}</h1>
                    <em>{metadata.description}</em>
                </header>
                {content}
            </article>
            <footer></footer>
        </Fragment>
    )
}
