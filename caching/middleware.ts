import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const href = request.nextUrl.href;
  const fifthSplit = href.split("/")[4];
  const FourthSplit = href.split("/")[3];
  const isStatic = fifthSplit === "static";
  const isAppSpecific = fifthSplit === "appspecific";
  const isFavIcon = FourthSplit.includes("favicon");
  if (!isStatic && !isAppSpecific && !isFavIcon) {
    const subUrl = href.split("/")[3];
    console.log({ subUrl });
    if (subUrl === "proxied-page") {
      return NextResponse.rewrite(new URL("/proxy", request.url));
    }
  }
  const response = NextResponse.next();
  response.cookies.set("test", "test");

  return response;
};
