import { PrismaClient } from "@prisma/client";

//Global prisma client for hot reloading
declare global {
    namespace globalThis {
        var prismadb = PrismaClient
    }
}

export default client;