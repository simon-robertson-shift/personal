import css from "./index.module.css"

type Props = {
    readonly data: string[]
}

export function ListElement({ data }: Props) {
    const items = data.map((value, key) => {
        return (
            <li key={key} className={css.item}>
                {value}
            </li>
        )
    })

    return <ul className={css.list}>{items}</ul>
}
