export interface IPageContentRepository {
  init(id: string): void;
  getJsonLd(): {};
  getMetadata(): {};

  showDetail(): (props: any) => JSX.Element;
  showPlugin(): (props: any) => JSX.Element;
}
