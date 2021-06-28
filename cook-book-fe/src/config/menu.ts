export type MenuItem = {
    label: string;
    subItems: SubMenuItem[];
};

export type SubMenuItem = {
    name: string;
    url: string
}

export const menuItems: MenuItem[] = [
    {
        label: "Recipes",
        subItems: [
            {
                name: 'All recipes',
                url: '/recipe'
            },
            {
                name: 'Salads',
                url: '/recipe'
            },
            {
                name: 'Soups',
                url: '/recipe'
            },
            {
                name: 'Add recipe',
                url: '/recipe'
            },
        ]
    },
    {
        label: "Categories",
        subItems: [
            {
                name: 'All categories',
                url: '/category'
            },
            {
                name: 'Salads',
                url: '/category'
            },
            {
                name: 'Soups',
                url: '/category'
            },
            {
                name: 'Add recipe',
                url: '/category'
            },
        ]
    }
];

