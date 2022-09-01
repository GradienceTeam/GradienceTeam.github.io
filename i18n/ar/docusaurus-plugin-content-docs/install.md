---
sidebar_position: 1
---

# تثبيت

## فلاتباك

### اللهب

:::caution

غير متوفر بعد

:::

```shell
تثبيت flatpak com.github.GradienceTeam.Gradience
```

### من إجراءات Github

اذهب إلى صفحة [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) سير العمل، وانقر على أحدث إصدار. مرر إلى قسم حقائق الفن، قم بتنزيل وتثبيت.

### باستخدام `flatpak-buildder`

1. فتح محطة طرفية
2. تشغيل `git نسخة https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. أضف `gnome-nightly` مستودع Flatpak `flatpak Remote-add --if-not-existing gnome-nighly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. تثبيت نسخة `الرئيسية` من GNOME SDK: `تثبيت flatpak org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. تشغيل `flatpak-buildder --install --user --force-Clerepo/com.github.GradienceTeam.Gradience.json`

بدلاً من ذلك، افتح المشروع مع GNOME Builder، ثم قم ببناءه وتشغيله.

## من المصدر

### التثبيت العالمي

```sh
git نسخة https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/Local
sudo ninja -C builddir
```

### التركيب المحلي (لأغراض الاختبار والتطوير)

```sh
استنساخ git https://github.com/GradienceTeam/Gradience. إنه
cd Gradience
بنائًا لشبكة
تكوين بناء ميكر-Dprefix="$(pwd)/builddir/testdir"
تثبيت مبني نينجا - سي
تشغيل مبني نينجا - سي
```

::note

أثناء الاختبار والتطوير، كملاءمة، يمكنك استخدام البرنامج النصي `local.sh` لإعادة بناء المباني المحلية بسرعة.

:::

## التالي

الآن، يمكنك [إعداد](/docs/setup) النظام الخاص بك وبعد ذلك، يمكنك تشغيل Gradiy.
