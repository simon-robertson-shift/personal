import css from "./index.module.css"

type Props = {
    readonly data: string
}

export function HeadingElement({ data }: Props) {
    return <h2 className={css.heading}>{data}</h2>
}
