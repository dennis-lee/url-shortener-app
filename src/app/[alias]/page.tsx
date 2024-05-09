import { notFound, redirect } from "next/navigation";

async function getUrl(alias: string) {
  return await fetch(`${process.env.URL_SHORTENER_API}/api/url/${alias}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.url;
    });
}

export default async function UrlRedirectPage({ params }: any) {
  let url: string;
  try {
    url = await getUrl(params.alias);
  } catch (e) {
    notFound();
  }

  redirect(url);
}
