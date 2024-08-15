import { Fragment } from "app/components/core/fragment"
import { PageContent } from "app/components/core/page-content"
import { PageHeader } from "app/components/core/page-header"

export function SmartFlows() {
    return (
        <Fragment>
            <PageHeader title="Smart Flows" description="@ Shift Platform Ltd" />
            <PageContent expanded={true}></PageContent>
        </Fragment>
    )
}

export default SmartFlows
