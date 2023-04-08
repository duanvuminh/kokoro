export interface IPageContentRepository {
    init(id: string): void
    getJsonLd(): any
    getMetadata(): any

    summaryTitle(): string
    summaryContent(): (props: any) => JSX.Element

    showDetail():(props: any) => JSX.Element
    showPlugin():(props: any) => JSX.Element
}