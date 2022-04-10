import { NextRequest, NextResponse } from 'next/server';
import countries from '../utils/countries.json';

export async function middleware(req: NextRequest) {
  // Sample get request
  // eslint-disable-next-line no-unused-vars
  const href =
    'http://localhost:3000/auth?country=US&city=San+Francisco&region=CA&currencyCode=USD&currencySymbol=%24&name=United+States+dollar&languages=English';
  //   console.log('req=================', req);

  const { nextUrl: url, geo } = req;

  console.log('=================');
  console.log(url.hostname, url.pathname);
  const country = geo.country || 'US';
  const city = geo.city || 'San Francisco';
  const region = geo.region || 'CA';

  const countryInfo = countries.find(x => x.cca2 === country);

  const currencyCode = Object.keys(countryInfo.currencies)[0];
  const currency = countryInfo.currencies[currencyCode];
  const languages = Object.values(countryInfo.languages).join(', ');

  url.searchParams.set('country', country);
  url.searchParams.set('city', city);
  url.searchParams.set('region', region);
  url.searchParams.set('currencyCode', currencyCode);
  url.searchParams.set('currencySymbol', currency.symbol);
  url.searchParams.set('name', currency.name);
  url.searchParams.set('languages', languages);

  console.log('=================');
  //   console.log(url);

  return NextResponse.rewrite(url);
}
