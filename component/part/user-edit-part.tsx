import { editGithub, githubRepository } from "lib/const/app-text-const";

export function UserEditPart({
  id,
  postType,
}: {
  id: string;
  postType: string;
}) {
  let path = "";
  switch (postType) {
    case "word-list":
      path = "/mdx-word-list/" + id + ".mdx";
      break;
    case "kanji-list":
      path = "/mdx-kanji-list/" + id + ".mdx";
      break;
    case "kanji":
      path = "/mdx-kanji/" + id + ".mdx";
      break;
    case "single-page":
      path = "/mdx-single-page/" + id + ".mdx";
      break;
    default:
      break;
  }
  return (
    <a
      target="_blank"
      className="btn-text float-right"
      href={`${githubRepository}${path}`}
    >
      <sub>{editGithub}</sub>
    </a>
  );
}
