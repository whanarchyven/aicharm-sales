/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async ()=>{
        return [
            {
                source: '/',
                destination: '/404',
                permanent: false, // Указываем временный редирект, чтобы избежать кеширования
            },
        ];
    }
}

module.exports = nextConfig
