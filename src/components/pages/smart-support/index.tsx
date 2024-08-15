import { Fragment } from "app/components/core/fragment"
import { PageContent } from "app/components/core/page-content"
import { PageHeader } from "app/components/core/page-header"

export function SmartSupport() {
    return (
        <Fragment>
            <PageHeader title="Smart Support" description="@ Shift Platform Ltd" />
            <PageContent expanded={true}></PageContent>
        </Fragment>
    )
}

export default SmartSupport
