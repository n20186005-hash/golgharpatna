import type { Locale } from '../content/guide-schema';

const WM: Record<number, [string, string]> = {
  0: ['☀️', 'साफ़ आसमान'],
  1: ['🌤️', 'अधिकतर साफ़'],
  2: ['⛅', 'आंशिक बादल'],
  3: ['☁️', 'बादल छाए'],
  45: ['🌫️', 'कोहरा'],
  48: ['🌫️', 'कोहरा (पाला)'],
  51: ['🌦️', 'हल्की बूंदाबांदी'],
  53: ['🌦️', 'बूंदाबांदी'],
  55: ['🌦️', 'तेज़ बूंदाबांदी'],
  56: ['🌧️', 'हल्की बर्फीली बूंदाबांदी'],
  57: ['🌧️', 'बर्फीली बूंदाबांदी'],
  61: ['🌧️', 'हल्की बारिश'],
  63: ['🌧️', 'बारिश'],
  65: ['🌧️', 'तेज़ बारिश'],
  66: ['🌧️', 'हल्की बर्फीली बारिश'],
  67: ['🌧️', 'बर्फीली बारिश'],
  71: ['🌨️', 'हल्की बर्फबारी'],
  73: ['🌨️', 'बर्फबारी'],
  75: ['🌨️', 'भारी बर्फबारी'],
  77: ['🌨️', 'बर्फ के दाने'],
  80: ['🌧️', 'हल्की बौछारें'],
  81: ['🌧️', 'बौछारें'],
  82: ['🌧️', 'तेज़ बौछारें'],
  85: ['🌨️', 'हल्की बर्फीली बौछारें'],
  86: ['🌨️', 'बर्फीली बौछारें'],
  95: ['⛈️', 'गरज-चमक के साथ तूफान'],
  96: ['⛈️', 'तूफान, ओले संभव'],
  99: ['⛈️', 'भारी तूफान, ओले संभव']
};

const WM_EN: Record<number, [string, string]> = {
  0: ['☀️', 'Clear sky'],
  1: ['🌤️', 'Mainly clear'],
  2: ['⛅', 'Partly cloudy'],
  3: ['☁️', 'Overcast'],
  45: ['🌫️', 'Fog'],
  48: ['🌫️', 'Depositing rime fog'],
  51: ['🌦️', 'Light drizzle'],
  53: ['🌦️', 'Drizzle'],
  55: ['🌦️', 'Dense drizzle'],
  56: ['🌧️', 'Light freezing drizzle'],
  57: ['🌧️', 'Freezing drizzle'],
  61: ['🌧️', 'Light rain'],
  63: ['🌧️', 'Rain'],
  65: ['🌧️', 'Heavy rain'],
  66: ['🌧️', 'Light freezing rain'],
  67: ['🌧️', 'Freezing rain'],
  71: ['🌨️', 'Light snowfall'],
  73: ['🌨️', 'Snowfall'],
  75: ['🌨️', 'Heavy snowfall'],
  77: ['🌨️', 'Snow grains'],
  80: ['🌧️', 'Light rain showers'],
  81: ['🌧️', 'Rain showers'],
  82: ['🌧️', 'Violent rain showers'],
  85: ['🌨️', 'Light snow showers'],
  86: ['🌨️', 'Snow showers'],
  95: ['⛈️', 'Thunderstorm'],
  96: ['⛈️', 'Thunderstorm with hail'],
  99: ['⛈️', 'Severe thunderstorm with hail']
};

const wmInfo = (code: number, locale: Locale): [string, string] =>
  (locale === 'en' ? WM_EN[code] : WM[code]) || ['🌡️', locale === 'en' ? 'No description available' : 'विवरण उपलब्ध नहीं'];

const fmtDay = (date: string, locale: Locale): string => {
  const dt = new Date(date + 'T12:00:00Z');
  return dt.toLocaleDateString(locale === 'en' ? 'en-IN' : 'hi-IN', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' });
};

export const nowHtml = (d: any, locale: Locale = 'hi'): string => {
  const c = d.current;
  const dl = d.daily;
  const ic = wmInfo(c.weather_code, locale);
  const uv = (dl.uv_index_max && dl.uv_index_max[0] != null) ? Math.round(dl.uv_index_max[0]) : '—';
  const pr = (dl.precipitation_probability_max && dl.precipitation_probability_max[0] != null) ? String(dl.precipitation_probability_max[0]) + '%' : '—';
  const L = locale === 'en'
    ? { feels: 'Feels like', humidity: 'Humidity', wind: 'Wind', uv: 'UV', chance: 'Chance of rain', rain: 'Rainfall', provider: 'Provider time' }
    : { feels: 'महसूस', humidity: 'नमी', wind: 'हवा', uv: 'UV', chance: 'वर्षा की संभावना', rain: 'वर्षा', provider: 'प्रदाता का समय' };
  const windUnit = locale === 'en' ? ' km/h' : ' किमी/घं';
  const rainUnit = locale === 'en' ? ' mm' : ' मिमी';
  return (
    '<div class="flex flex-wrap items-center gap-5">' +
      '<span class="text-6xl leading-none">' + ic[0] + '</span>' +
      '<div><strong class="block text-5xl font-black text-[#1d241f]">' + Math.round(c.temperature_2m) + '°C</strong>' +
      '<span class="mt-1 block font-bold text-[#236d72]">' + ic[1] + '</span></div>' +
    '</div>' +
    '<div class="mt-5 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">' +
      '<div class="rounded-xl bg-white p-3"><span class="block text-xs text-stone-500">' + L.feels + '</span><strong class="text-[#1d241f]">' + Math.round(c.apparent_temperature) + '°C</strong></div>' +
      '<div class="rounded-xl bg-white p-3"><span class="block text-xs text-stone-500">' + L.humidity + '</span><strong class="text-[#1d241f]">' + c.relative_humidity_2m + '%</strong></div>' +
      '<div class="rounded-xl bg-white p-3"><span class="block text-xs text-stone-500">' + L.wind + '</span><strong class="text-[#1d241f]">' + Math.round(c.wind_speed_10m) + windUnit + '</strong></div>' +
      '<div class="rounded-xl bg-white p-3"><span class="block text-xs text-stone-500">' + L.uv + '</span><strong class="text-[#1d241f]">' + uv + '</strong></div>' +
      '<div class="rounded-xl bg-white p-3"><span class="block text-xs text-stone-500">' + L.chance + '</span><strong class="text-[#1d241f]">' + pr + '</strong></div>' +
      '<div class="rounded-xl bg-white p-3"><span class="block text-xs text-stone-500">' + L.rain + '</span><strong class="text-[#1d241f]">' + (c.precipitation || 0) + rainUnit + '</strong></div>' +
    '</div><p class="mt-4 text-xs">' + L.provider + ': ' + c.time.replace('T',' ') + ' · Asia/Kolkata (UTC+5:30)</p>'
  );
};

export const daysHtml = (d: any, locale: Locale = 'hi'): string => {
  const dl = d.daily;
  if (!dl || !dl.time) return '';
  let items = '';
  dl.time.forEach((date: string, i: number) => {
    const w = wmInfo(dl.weather_code[i], locale);
    const pr = (dl.precipitation_probability_max && dl.precipitation_probability_max[i] != null)
      ? String(dl.precipitation_probability_max[i]) + '%' : '—';
    items +=
      '<li class="flex items-center justify-between gap-3 py-3">' +
        '<span class="w-24 shrink-0 font-black">' + fmtDay(date, locale) + '</span>' +
        '<span class="shrink-0" aria-hidden="true">' + w[0] + '</span>' +
        '<span class="flex-1 truncate text-stone-600">' + w[1] + '</span>' +
        '<span class="shrink-0 font-bold">' + Math.round(dl.temperature_2m_min[i]) + '° / ' + Math.round(dl.temperature_2m_max[i]) + '°</span>' +
        '<span class="shrink-0 rounded-full bg-[#236d72]/12 px-2 py-0.5 text-xs font-bold text-[#236d72]">💧 ' + pr + '</span>' +
      '</li>';
  });
  return '<ul class="divide-y divide-stone-300/70">' + items + '</ul>';
};

// किमी/घं → बीफ़ोर्ट पैमाना (हवा की तीव्रता)
const beaufort = (kmh: number): number => {
  if (kmh < 1) return 0;
  if (kmh < 6) return 1;
  if (kmh < 12) return 2;
  if (kmh < 20) return 3;
  if (kmh < 29) return 4;
  if (kmh < 39) return 5;
  if (kmh < 50) return 6;
  if (kmh < 62) return 7;
  if (kmh < 75) return 8;
  if (kmh < 89) return 9;
  if (kmh < 103) return 10;
  if (kmh < 118) return 11;
  return 12;
};

// मौसम-आधारित स्मार्ट सुझाव — केवल लागू होने वाले आइटम दे।
export const buildAdvice = (d: any, locale: Locale = 'hi'): { outfit: string[]; plan: string[]; items: string[]; risk: string[] } => {
  const hi = locale === 'hi';
  const c = d.current;
  const dl = d.daily;
  const code = c.weather_code;
  const tempHigh = Math.round(dl.temperature_2m_max[0]);
  const tempLow = Math.round(dl.temperature_2m_min[0]);
  const delta = tempHigh - tempLow;
  const wind = Math.round(c.wind_speed_10m);
  const bf = beaufort(wind);
  const uv = (dl.uv_index_max && dl.uv_index_max[0] != null) ? Math.round(dl.uv_index_max[0]) : 0;
  const prToday = dl.precipitation_probability_max[0] ?? 0;

  const isThunder = code >= 95 && code <= 99;
  const isHeavyRain = code === 65 || code === 67 || code === 82;
  const isModRain = code === 63 || code === 81;
  const isLightRain = (code >= 51 && code <= 61) || code === 80;
  const isFog = code === 45 || code === 48;
  const isClear = code === 0 || code === 1;
  const isCloud = code === 2 || code === 3;

  const outfit: string[] = [], plan: string[] = [], items: string[] = [], risk: string[] = [];

  // वर्षा
  if (prToday >= 60 || isModRain || isHeavyRain) {
    outfit.push(hi ? 'बारिश की संभावना है—पानी रोकने वाले कपड़े या रेनकोट बेहतर रहेंगे।' : 'Rain is likely — a waterproof layer or raincoat will help.');
    plan.push(hi ? 'अंदर के स्थान (जैसे संग्रहालय) प्राथमिकता दें; गीली बाहरी सीढ़ियाँ फिसलन भरी हो सकती हैं।' : 'Prefer indoor stops such as a museum; wet outdoor steps can be slippery.');
    items.push(hi ? 'छाता / रेनकोट' : 'Umbrella / raincoat');
  } else if (isLightRain) {
    plan.push(hi ? 'हल्की बूंदाबांदी—रास्ते गीले, चलते समय फिसलन से बचें।' : 'Light drizzle — paths stay damp, so watch your footing.');
    items.push(hi ? 'फोल्डेबल छाता' : 'Foldable umbrella');
  }
  if (isThunder) risk.push(hi ? 'बिजली-गरज की स्थिति—पेड़ों और ऊँची जगहों से दूर रहें, सीढ़ियाँ न चढ़ें; खुले स्थानों पर न जाएँ।' : 'Thunder and lightning — stay away from trees and high points, do not use the stairs, and avoid open ground.');
  if (isHeavyRain) risk.push(hi ? 'बारिश अधिक है—निचले/भीड़ वाले इलाकों से दूर रहें; फिसलन से बचें और स्थल के वर्तमान निर्देश देखें।' : 'Heavy rain — avoid low-lying and crowded areas, watch for slippery surfaces and follow the site’s current instructions.');
  if (isFog) risk.push(hi ? 'कोहरा—दृश्यता कम; ऊपरी मंच से नगर/नदी का दृश्य स्पष्ट नहीं रहेगा, सावधानी रखें।' : 'Fog — low visibility; the city and river view from any upper level will be unclear, so take care.');

  // गर्मी व UV
  if (tempHigh >= 32) {
    outfit.push(hi ? 'तापमान अधिक—हल्के, साँस लेने वाले कपड़े पहनें।' : 'High temperature — wear light, breathable clothing.');
    plan.push(hi ? 'दोपहर की चरम गर्मी से बचें, खुले में समय कम रखें।' : 'Avoid the peak midday heat and keep time in the open short.');
    items.push(hi ? 'सनस्क्रीन, पर्याप्त पानी, टोपी' : 'Sunscreen, plenty of water, a hat');
  }
  if (uv >= 5) {
    outfit.push(hi ? 'UV प्रबल—ढ़का हुआ व हल्का कपड़ा बेहतर।' : 'Strong UV — covered, light clothing is better.');
    items.push(hi ? 'सनस्क्रीन, धूप का चश्मा, टोपी' : 'Sunscreen, sunglasses, a hat');
  }
  if (tempHigh <= 10) {
    outfit.push(hi ? 'ठंड अधिक—गर्म जैकेट/स्वेटर पहनें।' : 'Cold — wear a warm jacket or sweater.');
    items.push(hi ? 'जैकेट / स्वेटर' : 'Jacket / sweater');
  }
  if (delta > 8) outfit.push(hi ? 'दिन-रात का तापमान अंतर बड़ा—एक जैकेट/शॉल रखें ताकि कपड़े बदल सकें।' : 'A big day-to-night temperature gap — carry a jacket or shawl so you can layer up.');

  // हवा
  if (bf >= 7) {
    risk.push(hi ? 'तेज़ हवा (' + bf + ' स्केल)—ऊँची जगहों व साइनबोर्ड से दूर रहें; खुले ऊपरी हिस्से में सावधानी।' : 'Strong wind (Beaufort ' + bf + ') — keep away from high points and signage, and take care in exposed upper areas.');
  } else if (bf >= 5) {
    plan.push(hi ? 'हवा तेज़ चल रही है—ऊपरी सीढ़ियों पर पकड़ बनाए रखें।' : 'The wind is picking up — keep a firm hold on any upper stairways.');
    items.push(hi ? 'टोपी (हवा में उड़ सकती है)' : 'A hat that will not blow away');
  }

  // साफ / बादल (फ़ॉलबैक)
  if ((isClear || isCloud) && outfit.length === 0 && plan.length === 0) {
    plan.push(hi
      ? (isClear ? 'मौसम साफ—घूमने के लिए बढ़िया; सुबह/शाम का प्रकाश फोटो के लिए उत्कृष्ट।' : 'रौशनी नरम है—फोटोग्राफी के लिए अच्छा।')
      : (isClear ? 'Clear weather — good for walking, and morning or evening light is excellent for photos.' : 'Soft light — good for photography.'));
  }

  if (outfit.length === 0) outfit.push(hi ? 'मौसम सामान्य—आरामदायक कपड़े पहनें।' : 'Mild weather — comfortable clothing is fine.');
  if (plan.length === 0) plan.push(hi ? 'वास्तविक स्थिति और स्थानीय निर्देश देखकर घूमने की योजना बनाएँ।' : 'Plan your visit around the actual conditions and local instructions.');
  if (items.length === 0) items.push(hi ? 'पानी की बोतल रखना अच्छा रहेगा।' : 'A water bottle is a good idea.');

  return { outfit, plan, items, risk };
};

const adviceCol = (title: string, list: string[]): string =>
  '<div class="rounded-2xl border border-[#236d72]/20 bg-[#236d72]/6 p-4">' +
    '<h4 class="text-sm font-black text-[#236d72]">' + title + '</h4>' +
    '<ul class="mt-2 space-y-1.5 text-sm text-stone-700">' +
    list.map((i) => '<li class="flex gap-2"><span aria-hidden="true">✓</span><span>' + i + '</span></li>').join('') +
    '</ul></div>';

export const renderAdvice = (a: { outfit: string[]; plan: string[]; items: string[]; risk: string[] }, locale: Locale = 'hi'): string => {
  const hi = locale === 'hi';
  let html = '';
  if (a.risk && a.risk.length) {
    html += '<div class="rounded-2xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">' +
      '<p class="font-black">' + (hi ? '⚠️ सुरक्षा सावधानी' : '⚠️ Safety caution') + '</p>' +
      '<ul class="mt-2 space-y-1.5">' +
      a.risk.map((r) => '<li class="flex gap-2"><span aria-hidden="true">⚠️</span><span>' + r + '</span></li>').join('') +
      '</ul></div>';
  }
  html += '<div class="mt-3 grid gap-3 sm:grid-cols-3">' +
    adviceCol(hi ? '👕 यात्रा पहनावा' : '👕 What to wear', a.outfit) +
    adviceCol(hi ? '🗺️ घूमने की योजना' : '🗺️ How to plan', a.plan) +
    adviceCol(hi ? '🎒 साथ रखें' : '🎒 Carry with you', a.items) +
    '</div>';
  return html;
};


export function validateWeather(d:any,now=Date.now()):any {
 const num=(v:any,min:number,max:number)=>{if(typeof v!=='number'||!Number.isFinite(v)||v<min||v>max)throw Error('Invalid weather number');};
 const code=(v:any)=>{if(typeof v!=='number'||!Object.hasOwn(WM,v))throw Error('Invalid WMO');};
 const c=d?.current,x=d?.daily,TZ='Asia/Kolkata';
 const today=new Intl.DateTimeFormat('en-CA',{timeZone:TZ,year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(now));
 if(!c||!x||d.timezone!==TZ||typeof c.time!=='string'||!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(c.time))throw Error('Incomplete weather');
 const age=now-Date.parse(c.time+'+05:30');if(!Number.isFinite(age)||age>10800000||age< -900000||c.time.slice(0,10)!==today)throw Error('Stale weather');
 num(c.temperature_2m,-100,65);num(c.apparent_temperature,-120,80);num(c.relative_humidity_2m,0,100);num(c.wind_speed_10m,0,500);num(c.precipitation,0,500);code(c.weather_code);
 for(const key of ['time','weather_code','temperature_2m_max','temperature_2m_min','precipitation_probability_max','uv_index_max'])if(!Array.isArray(x[key])||x[key].length!==7)throw Error('Incomplete daily weather');
 x.time.forEach((day:any,i:number)=>{if(typeof day!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(day)||!Number.isFinite(Date.parse(day))||new Date(day).toISOString().slice(0,10)!==day||(i===0&&day!==today)||(i>0&&Date.parse(day)-Date.parse(x.time[i-1])!==86400000))throw Error('Invalid daily dates');num(x.temperature_2m_max[i],-100,65);num(x.temperature_2m_min[i],-100,65);if(x.temperature_2m_min[i]>x.temperature_2m_max[i])throw Error('Inverted temperatures');code(x.weather_code[i]);if(x.precipitation_probability_max[i]!==null)num(x.precipitation_probability_max[i],0,100);if(x.uv_index_max[i]!==null)num(x.uv_index_max[i],0,30);});return d;
}
export const weatherUrl='https://api.open-meteo.com/v1/forecast?latitude=25.620337&longitude=85.139448&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max&timezone=Asia%2FKolkata&forecast_days=7&wind_speed_unit=kmh';
