import ContentLoader from "react-content-loader";
import * as React from "react";

export const RecipeDetailsHeaderLoader = (props: any) => (
    <ContentLoader viewBox="0 0 400 160" height={160} width={400} {...props}>
        <rect x="0" y="80" rx="4" ry="4" width="250" height="8" />
    </ContentLoader>
);

export const RecipeDetailsDurationLoader = (props: any) => (
    <ContentLoader viewBox="0 0 400 160" height={160} width={400} {...props}>
        <rect x="0" y="29" rx="4" ry="4" width="100" height="8" />
        <rect x="0" y="50" rx="4" ry="4" width="50" height="10" />
        {/*<rect x="0" y="65" rx="4" ry="4" width="400" height="10" />*/}
        {/*<rect x="0" y="79" rx="4" ry="4" width="100" height="10" />*/}
        {/*<rect x="0" y="99" rx="5" ry="5" width="400" height="200" />*/}
    </ContentLoader>
);

export const RecipeDetailsBulletList = (props: any) => (
    <ContentLoader viewBox="0 0 400 150" height={130} width={400} {...props}>
        <rect x="0" y="0" rx="4" ry="4" width="100" height="8" />
        <circle cx="10" cy="30" r="8" />
        <rect x="25" y="25" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="60" r="8" />
        <rect x="25" y="55" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="90" r="8" />
        <rect x="25" y="85" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="120" r="8" />
        <rect x="25" y="115" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
);

export const RecipeDetailsLoader = (props: any) => (
    <ContentLoader viewBox="0 0 400 160" height={160} width={400} {...props}>
        <rect x="0" y="29" rx="4" ry="4" width="100" height="8" />
        <rect x="0" y="50" rx="4" ry="4" width="400" height="10" />
        <rect x="0" y="65" rx="4" ry="4" width="400" height="10" />
        <rect x="0" y="79" rx="4" ry="4" width="100" height="10" />
        {/*<rect x="0" y="99" rx="5" ry="5" width="400" height="200" />*/}
    </ContentLoader>
);
