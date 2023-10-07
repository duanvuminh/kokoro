import { N1, N2, N3, N4, N5 } from "lib/app/const/app-text-client-const";

interface Level {
  id: number;
  name: string;
}

const levelList: Level[] = [
  {
    id: 0,
    name: N1,
  },
  {
    id: 1,
    name: N2,
  },
  {
    id: 2,
    name: N3,
  },
  {
    id: 3,
    name: N4,
  },
  {
    id: 4,
    name: N5,
  },
];
export { levelList };
