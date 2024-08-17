import css from "./index.module.css"

type Props = {
    readonly data: string[]
}

export function TextElement({ data }: Props) {
    return data.map((value, key) => {
        return (
            <p key={key} className={css.paragraph}>
                {value}
            </p>
        )
    })
}
