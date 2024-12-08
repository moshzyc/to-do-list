export function clearCookies(res, cookieName) {
  res.cookie(cookieName, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(0),
  })
}
// export function clearCookie(res, cookieName) {
//   res.cookie(cookieName, "", {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "none",
//     expires: new Date(0),
//   })
// }
