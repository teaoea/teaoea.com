import { registerLocaleData } from '@angular/common';

import '@angular/common/locales/global/zh-Hans';
import zh_Hans from '@angular/common/locales/zh-Hans';
import extra_zh_Hans from '@angular/common/locales/extra/zh-Hans';
import '@angular/common/locales/global/zh-Hant-HK';
import zh_Hant_HK from '@angular/common/locales/zh-Hant-HK';
import extra_zh_Hant_HK from '@angular/common/locales/extra/zh-Hant-HK';
import '@angular/common/locales/global/zh-Hant';
import zh_Hant from '@angular/common/locales/zh-Hant';
import extra_zh_Hant from '@angular/common/locales/extra/zh-Hant';
import '@angular/common/locales/global/en-HK';
import en_HK from '@angular/common/locales/en-HK';
import extra_en_HK from '@angular/common/locales/extra/en-HK';


// China(Simplified Chinese)
registerLocaleData(zh_Hans, 'zh-Hans', extra_zh_Hans);
// Hong Kong,China(Traditional Chinese)
registerLocaleData(zh_Hant_HK, 'zh-Hant-HK', extra_zh_Hant_HK);
// Hong Kong,China(English)
registerLocaleData(en_HK, 'en-HK', extra_en_HK);
// Taiwan,China(Traditional Chinese)
registerLocaleData(zh_Hant, 'zh-Hant', extra_zh_Hant);
