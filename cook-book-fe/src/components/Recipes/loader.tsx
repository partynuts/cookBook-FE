import ContentLoader from "react-content-loader";
import * as React from "react";

const RecipesLoader = () => (
    <ContentLoader
        height={100}
        width={"33%"}
        speed={1}
        backgroundColor={'#fff'}
        foregroundColor={'#bfbfbf'}
        viewBox="0 0 380 70"
    >
        {/* Only SVG shapes */}
        <rect x="0" y="0" rx="5" ry="5" width="90%" height="100%" />
    </ContentLoader>
);

export default RecipesLoader;


