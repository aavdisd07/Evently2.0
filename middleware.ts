import { authMiddleware } from "@clerk/nextjs/server";
// import { authMiddleware } from '@clerk/nextjs/server'

// export default authMiddleware({
//   publicRoutes: [
//     '/',
//     '/events/:id',
//     '/api/webhook/clerk',
//     '/api/webhook/stripe',
//     '/api/uploadthing',
//     '/(api|trpc)(.*)'
//   ],
//   // ignoredRoutes: [
//   //   '/api/webhook/clerk',
//   //   '/api/webhook/stripe',
//   //   '/api/uploadthing'
//   // ]
// });

export default authMiddleware({
    publicRoutes: [
        "/",
        "/contact",
        "/api/webhooks(.*)",
        "/events/:id",
        "/api/webhook/clerk",
        "/api/webhook/stripe",
        "/api/uploadthing",
        "/(api|trpc)(.*)",
    ],
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
