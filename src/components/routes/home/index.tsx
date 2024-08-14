import { Meta, Title } from "@solidjs/meta"

import { Fragment } from "app/components/fragment"
import { PageContent } from "app/components/page-content"
import { PageHero } from "app/components/page-hero"

export function Home() {
    return (
        <Fragment>
            <Title>Simon Robertson</Title>
            <Meta name="description" content="" />
            <PageHero />
            <PageContent>
                <span>Coming Soon&trade;</span>
            </PageContent>
        </Fragment>
    )
}

export default Home
