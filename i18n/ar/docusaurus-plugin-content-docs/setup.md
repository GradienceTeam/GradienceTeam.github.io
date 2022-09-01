# الإعداد

## تطبيقات ليبادوايتا

لا يتطلب الأمر إعداد إضافي لتطبيقات Libadwaita الأصلية.

بالنسبة لتطبيقات Flatpak Libadwaita، تحتاج إلى تجاوز الأذونات:

- تشغيل `sudo flatpak تجاوز --filesystem=xdg-config/gtk-4.0` أو
- استخدام [Flatseal](https://github.com/tchx84/Flatseal) وإضافة `xdg-config/gtk-4.0` إلى **ملفات أخرى** في **نظام الملفات** قسم **جميع التطبيقات**

## تطبيقات GTK 4 Vanilla

استخدم [هذا الدليل](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md) لتطبيقات الفانيلا GTK 4.

## تطبيقات GTK 3

- تثبيت وتطبيق موضوع [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) (لا تنسى تثبيت حزمة Flatpak!)
- بالنسبة لتطبيقات Flatpak ، تحتاج إلى تجاوز الأذونات الخاصة بها:
  - تشغيل `sudo flatpak تجاوز --filesystem=xdg-config/gtk-3.0` أو
  - استخدام [Flatseal](https://github.com/tchx84/Flatseal) وإضافة `xdg-config/gtk-3.0` إلى **الملفات الأخرى** في **نظام الملفات** قسم **جميع التطبيقات**
