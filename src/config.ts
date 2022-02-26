export const githubUrl:string = 'https://github.com/nexys-admin/qrbill';
export const version = import.meta.env.SNOWPACK_PUBLIC_VERSION || "unset_version";
export const sha = import.meta.env.SNOWPACK_PUBLIC_GIT_SHA || "unset_sha";
export const githubUrlVersion:string = `${githubUrl}/releases/tag/${version}`
export const title = "Swiss QR Bill";