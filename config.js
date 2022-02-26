import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

export const githubUrl = "https://github.com/nexys-admin/qrbill";
export const version = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_VERSION || "unset_version";
export const sha = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_GIT_SHA || "unset_sha";
export const githubUrlVersion = `${githubUrl}/releases/tag/${version}`;
export const title = "Swiss QR Bill";
