import esbuild from 'esbuild'

const build = async () => {
  await Promise.all([
    // bundle for commonjs
    esbuild.build({
      entryPoints: ['src/index.ts'],
      bundle: true,
      minify: true,
      format: 'esm',
      outfile: `./dist/index.js`,
      platform: 'node',
      treeShaking: true,
      tsconfig: 'tsconfig.json',
      external: [
        '@anthropic-ai/sdk',
        '@aws-sdk/client-bedrock-runtime',
        '@google/generative-ai',
        'chalk',
        'cohere-ai',
        'mime-types',
        'openai',
      ],
    }),
  ])
}

build()
