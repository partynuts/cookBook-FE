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
                url: '/recipes'
            },
            {
                name: 'Salads',
                url: '/recipes?search=salads'
            },
            {
                name: 'Soups',
                url: '/recipe'
            },
            {
                name: 'Add recipe',
                url: '/recipes/add'
            },
        ]
    },
    {
        label: "Categories",
        subItems: [
            {
                name: 'All categories',
                url: '/categories'
            },
            {
                name: 'Salads',
                url: '/categories'
            },
            {
                name: 'Soups',
                url: '/categories'
            },
            {
                name: 'Add recipe',
                url: '/categories'
            },
        ]
    }
];

