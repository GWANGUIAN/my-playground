export interface SubMenu {
  name: string;
  path: string;
}

export interface MainMenu {
  name: string;
  path?: string;
  subMenus?: SubMenu[];
}

export const MenuList: MainMenu[] = [
  {
    name: 'Web APIs',
    subMenus: [
      {
        name: 'Keyboard API',
        path: '/web/keyboard',
      },
    ],
  },
];
