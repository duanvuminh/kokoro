export interface IPostTypeListModel {
  breakToPices: () => void;
  linkPices(): (props: any) => JSX.Element | JSX.Element;
}
