export type ArticleMetadata = {
    readonly name: string
    readonly company: Company
    readonly description: string
    readonly path: string
}

export type Company = "*" | "Shift Platform Ltd"

export const articles: ArticleMetadata[] = [
    {
        name: "Smart Flows",
        company: "Shift Platform Ltd",
        description: "Replace this text with a brief description of the project",
        path: "/smart-flows"
    },
    {
        name: "JIT Translations",
        company: "Shift Platform Ltd",
        description: "Replace this text with a brief description of the project",
        path: "/jit-translations"
    },
    {
        name: "Smart Support",
        company: "Shift Platform Ltd",
        description: "Replace this text with a brief description of the project",
        path: "/smart-support"
    }
]

export const companyColor: Record<Company, string> = {
    "*": "#303030",
    "Shift Platform Ltd": "#664152"
}
