import { PrismaClient } from "@prisma/client";

//Trick to save Prisma Client to global file to avoid hot reloading
const client = global.prismadb || new PrismaClient();

if(process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;