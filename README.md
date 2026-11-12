# A Little Late, A Lifetime of Memories

موقع مفاجأة عيد ميلاد متأخرة لسارة، مبني بـ React + Vite + Tailwind CSS + Framer Motion.

## التشغيل محليًا

```bash
npm install
npm run dev
```

## صورة سارة

الصورة المستخدمة في الموقع موجودة في:

```
public/images/sara.jpg
```

المسار مُعرّف في `src/data/content.ts` تحت اسم `SARA_PHOTO_SRC`. لو الصورة غير موجودة، تظهر خلفية متدرجة بدلًا منها.

## الموسيقى

ملف أغنية «تملي معاك» موجود في:

```
public/audio/temally-maak.mp3
```

تحاول الأغنية البدء تلقائيًا من الثانية 15، وتُعاد من الثانية نفسها بعد انتهائها. إذا منع المتصفح التشغيل التلقائي، اضغطي زر الصوت أسفل الشاشة لبدئها. يتيح الزر إيقاف الموسيقى أو استئنافها، والمسار مُعرّف في `src/data/content.ts` تحت اسم `MUSIC_SRC`.

## تعديل النصوص

كل النصوص (الرسالة، العبارات، الذكريات القادمة، رسالة الأمنية) موجودة في:

```
src/data/content.ts
```

## البناء

```bash
npm run build
```

الناتج يُكتب في مجلد `dist/`.

## النشر على Vercel أو Netlify

- أمر البناء: `npm run build`
- مجلد النشر: `dist`
- إعداد Single Page Application: لا يحتاج إعدادات إضافية لأن الموقع صفحة واحدة.

ارفعي المشروع إلى GitHub ثم اربطيه بـ Vercel أو Netlify، وتأكدي من رفع مجلدي `public/images` و`public/audio` مع المشروع قبل النشر.
