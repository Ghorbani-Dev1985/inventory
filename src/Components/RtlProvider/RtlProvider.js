

import { CacheProvider , useRouter} from '@emotion/react';
import createCache from '@emotion/cache';
import rtl from 'stylis-plugin-rtl';

// NB: A unique `key` is important for it to work!
const options = {
  rtl: { key: 'css-fa', stylisPlugins: [rtl] },
  ltr: { key: 'css-en' },
}

export function RtlProvider({ children }) {
  const { locale } = useRouter();
  const dir = locale == 'fa' ? 'rtl' : 'ltr'
  const cache = createCache(options[dir])
  return <CacheProvider value={cache} children={children} />
}