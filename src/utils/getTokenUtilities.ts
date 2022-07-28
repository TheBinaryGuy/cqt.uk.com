import { isToday } from '@/utils/isToday';
import { mkdir, readFile, rm, stat, writeFile } from 'fs/promises';
import path from 'path';

export const getAndCacheTokenAsync = async () => {
    const cacheFolderPath = path.join(process.cwd(), '.cache');
    const tokenFilePath = path.join(cacheFolderPath, 'token');

    let token = await getDataFromFsIfBirthTimeTodayAsync(tokenFilePath);

    if (token !== null) {
        return token;
    }

    const strapiCreds = {
        identifier: process.env.STRAPI_USER!,
        password: process.env.STRAPI_PASSWORD!,
    };

    const user = await fetchUserAsync(strapiCreds);
    token = user.jwt;

    await cacheDataAsync(cacheFolderPath, tokenFilePath, token);

    return token;
};

export const getDataFromFsIfBirthTimeTodayAsync = async (path: string) => {
    try {
        const { birthtime } = await stat(path);

        if (isToday(birthtime)) {
            const dataBuffer = await readFile(path);
            return dataBuffer.toString();
        }
    } catch {}

    return null;
};

export const fetchUserAsync = async (strapiCreds: {
    identifier: string;
    password: string;
}) => {
    const strapiLoginReq = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
        {
            method: 'POST',
            body: JSON.stringify(strapiCreds),
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
            },
        }
    );

    const strapiLoginResp: { jwt: string; user: { username: string } } =
        await strapiLoginReq.json();

    return strapiLoginResp;
};

export const cacheDataAsync = async (
    folderPath: string,
    filePath: string,
    data: string
) => {
    try {
        await rm(filePath);
    } catch {}

    try {
        await mkdir(folderPath, { recursive: true });
        await writeFile(filePath, data, {});
    } catch {}
};
