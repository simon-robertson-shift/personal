import { Meta, Title } from "@solidjs/meta"

import { Fragment } from "app/components/core/fragment"

import css from "./index.module.css"

type Props = {
    readonly title: string
    readonly description: string
    readonly metaTitle?: string
    readonly metaDescription?: string
    readonly bypassMeta?: boolean
}

export function PageHeader({
    title,
    description,
    metaTitle = title,
    metaDescription = description
}: Props) {
    return (
        <Fragment>
            <Title>{metaTitle}</Title>
            <Meta name="description" content={metaDescription} />
            <header class={css.component}>
                <h1>{title}</h1>
                <em>{description}</em>
            </header>
        </Fragment>
    )
}
