import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

import { remarkCodeHike, recmaCodeHike, CodeHikeConfig } from "codehike/mdx"

const chConfig: CodeHikeConfig = {
    components: { code: "Code" },
}

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [[remarkCodeHike, chConfig]],
        recmaPlugins: [[recmaCodeHike, chConfig]],
        jsx: true,
    },
})


const nextConfig: NextConfig = {
    output: 'standalone',
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};


export default withMDX(nextConfig);
