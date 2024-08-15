import css from "./index.module.css"

type Props = {
    readonly expanded?: boolean
    readonly children?: any
}

export function PageContent(props: Props) {
    return (
        <div classList={{ [css.component]: true, [css.expanded]: props.expanded }}>
            {props.children}
        </div>
    )
}
