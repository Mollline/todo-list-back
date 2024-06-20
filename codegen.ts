import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "./graphql/schema.ts",
    generates: {
        "./generated/index.ts": {
            config: {
                useIndexSignature: true,
                exposeQueryKeys: true,
                exposeFetcher: true,
                withHooks: true,
                dedupeFragments: true,
            },
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-react-query",
            ],
        },
    },
};
export default config;