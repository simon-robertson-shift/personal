import { Fragment } from "app/components/core/fragment"
import { PageContent } from "app/components/core/page-content"
import { PageHeader } from "app/components/core/page-header"

export function JitTranslation() {
    return (
        <Fragment>
            <PageHeader title="JIT Translations" description="@ Shift Platform Ltd" />
            <PageContent expanded={true}></PageContent>
        </Fragment>
    )
}

export default JitTranslation
