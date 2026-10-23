# गोलघर पटना मार्गदर्शिका

स्वतंत्र हिंदी साइट, Astro static और Tailwind पर। मौजूदा मौसम व्यवस्था निर्माण के समय Open-Meteo स्नैपशॉट और ब्राउज़र ताज़ाकरण का उपयोग करती है। SSR या server islands नहीं हैं।

package.json में घोषित Node और pnpm का उपयोग करें। `pnpm install --frozen-lockfile`, `pnpm run check`, `pnpm run build`। सामान्य `npx wrangler deploy` src/worker.js के माध्यम से dist assets, canonical redirects और वास्तविक404 देता है।

चित्र मूल सांकेतिक SVG हैं, वास्तविक फोटो नहीं। विश्लेषण की पसंद /cookies/ पर और सेवा विवरण /privacy/ पर हैं।
