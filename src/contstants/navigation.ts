export interface SubMenu {
  name: string;
  path: string;
}

export interface MainMenu {
  name: string;
  path?: string;
  subMenus?: SubMenu[];
}

export const menuList: MainMenu[] = [
  {
    name: 'Web APIs',
    subMenus: [
      {
        name: 'Keyboard API',
        path: '/web/keyboard',
      },
    ],
  },
  {
    name: 'Frameworks',
    subMenus: [
      {
        name: 'Three js',
        path: '/frameworks/threejs',
      },
    ],
  },
];
