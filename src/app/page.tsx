import { PageRenderer } from "@/components/page-renderer"

import { fetchPageMetadataForSlug } from "@/data/pages"

import { Metadata } from "next"
import { notFound } from "next/navigation"

const homepageSlug = "home"

export default async function Page() {
    const metadata = await fetchPageMetadataForSlug(homepageSlug)

    if (metadata === undefined) {
        notFound()
    }

    return <PageRenderer metadata={metadata} />
}

// Dynamically generate the homepage metadata.
export async function generateMetadata(): Promise<Metadata> {
    const metadata = await fetchPageMetadataForSlug(homepageSlug)

    if (metadata === undefined) {
        return {}
    }

    return {
        title: metadata.title,
        description: metadata.description
    }
}
