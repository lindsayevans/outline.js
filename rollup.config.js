import pkg from './package.json';

const year = (new Date()).getFullYear();
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ©️ Copyright ${year} Lindsay Evans & contributors
 * Released under the MIT license
 * ${pkg.homepage}
 */`;

export default {
    input: 'src/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
            banner,
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true,
            banner,
        },
        {
            name: 'RemoveFocusOutline',
            file: pkg.browser,
            format: 'umd',
            sourcemap: true,
            banner,
        }
    ],
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
    ],
}
