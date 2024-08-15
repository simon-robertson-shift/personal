export type ArticleMetadata = {
    readonly name: string
    readonly company: Company
    readonly description: string
    readonly path: string
}

export type Company = "*" | "Personal" | "Shift Platform Ltd"

export const articles: ArticleMetadata[] = [
    {
        name: "Skills & Preferences",
        company: "*",
        description: "Replace this text with a brief description of the project",
        path: "/skills-and-preferences"
    },
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
    },
    {
        name: "Project Progression",
        company: "Personal",
        description: "Replace this text with a brief description of the project",
        path: "/project-progression"
    },
    {
        name: "Downloadable Files",
        company: "*",
        description: "Replace this text with a brief description of the project",
        path: "/downloadable-files"
    }
]

export const companyColor: Record<Company, string> = {
    "*": "#303030",
    "Personal": "#4d5f47",
    "Shift Platform Ltd": "#664152"
}

export function findArticleMetadataByPath(path: string): ArticleMetadata | null {
    return (
        articles.find((article) => {
            return article.path === path
        }) ?? null
    )
}
