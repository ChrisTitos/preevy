import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['main.ts', 'index.ts'],
  bundle: true,
  outdir: './dist',
  platform: 'node',
  target: 'es2020',
  format: 'cjs',
  treeShaking: true,
  loader: {
    '.node': 'file',
  },
  sourcemap: true,
})
