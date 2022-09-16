---
sidebar_position: 1
---

# تثبيت

## فلاتباك

### اللهب

<a href="https://flathub.org/apps/details/com.github.GradienceTeam.Gradience">
    <img width="200" alt="تحميل على Flathub" src="https://flathub.org/assets/badges/flathub-badge-i-en.svg"/>
</a>

```shell
flatpak install com.github. GradienceTeam.
```

### من إجراءات Github

اذهب إلى صفحة [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) سير العمل، وانقر على أحدث إصدار. مرر إلى قسم حقائق الفن، قم بتنزيل وتثبيت.

### باستخدام `flatpak-buildder`

1. فتح محطة طرفية
2. تشغيل `git نسخة https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. أضف `gnome-nightly` مستودع Flatpak `flatpak Remote-add --if-not-existing gnome-nighly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. Install the `master` version of GNOME SDK: `flatpak install org.gnome. Sdk/x86_64/master org.gnome. Platform/x86_64/master`
5. Run `flatpak-builder --install --user --force-clean repo/ com.github. GradienceTeam. Gradience.json`

بدلاً من ذلك، افتح المشروع مع GNOME Builder، ثم قم ببناءه وتشغيله.

## البناء والتثبيت

يمكن تثبيت الاشعاع باستخدام طرق متعددة.

- فلاثوب (مستحسن)
- كحزمة RPM
- كحزمة DEB (غير متوفرة بعد)
- من UR

### فلاتباك

الإشعاع متاح على Flathub. يمكنك تثبيته باستخدام الأمر التالي:

```bash
تثبيت flathub com.github.GradienceTeam.Gradience
```

### كوبر

الغرانيس متاح على COPR. يمكنك تثبيته باستخدام الأمر التالي:

```bash
dnf copr تمكين lyessaadi/gradience
dnf install gradience
```

### ديبيان (ومشتقات)

غير متوفر بعد. إذا أردت، قم بتقديم PR.

### آر

الإشعاع متاح على AUR. يمكنك تثبيته باستخدام الأمر التالي:

```bash
yay -S درجة الجلد # أو الدرجة-git
```

### بناء من المصدر

#### المتطلبات

- Python 3 `python`
- PyGObject `python-gobject`
- مخطط [`معجم المخطط`](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK4 `gtk4`
- libadwaita (>= 1.2.alpha) `libadwaita`
- Meson `meson`
- نينجا `نينجا بناء`

تثبيت مكتبات بايثون المطلوبة:

```sh
تثبيت pip -r requirements.txt
```

### التثبيت العالمي

```sh
git نسخة https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/Local
sudo ninja -C builddir
```

### البناء المحلي (لأغراض الاختبار والتنمية)

```sh
استنساخ git https://github.com/GradienceTeam/Gradience. إنه
cd Gradience
بناء شبكة
تكوين ميكر-Dprefix="$(pwd)/builddir"
بناء نينجا - سي مثبت
نينجا - سي
```

::note

أثناء الاختبار والتطوير، كملاءمة، يمكنك استخدام البرنامج النصي `local.sh` لإعادة بناء المباني المحلية بسرعة.

:::

## التالي

الآن، يمكنك [إعداد](/docs/setup) النظام الخاص بك وبعد ذلك، يمكنك تشغيل Gradiy.
