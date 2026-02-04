const repo = "letter-love";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // genera la carpeta /out con el build estático
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true, // opcional, ayuda en Pages con rutas estáticas
  images: {
    unoptimized: true, // ya lo tenías
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
