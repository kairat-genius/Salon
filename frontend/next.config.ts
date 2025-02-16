const apiUrl = new URL(process.env.NEXT_PUBLIC_API_URL || "http://localhost");
const protocol = apiUrl.protocol.replace(":", "") === "https" ? "https" : "http"; 
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: protocol === "http",
        remotePatterns: [
            {
                protocol,
                hostname: apiUrl.hostname,
                pathname: "/media/**",
            },
        ],
    },
};

export default nextConfig;
