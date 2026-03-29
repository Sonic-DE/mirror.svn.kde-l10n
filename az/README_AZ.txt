============================================================
KDE AZƏRBAYCAN TƏRCÜMƏ LAYİHƏSİ - YENİ ÜZVLƏR ÜÇÜN BƏLƏDÇİ
============================================================

Bu sənəd KDE layihəsinin Azərbaycan dilinə lokallaşdırılması
zamanı iş axınını tənzimləmək və SVN konfliktlərinin (ziddiyyətlərin)
qarşısını almaq üçün hazırlanmışdır.

1. İŞƏ BAŞLAMAZDAN ƏVVƏL (QIZIL QAYDA)
--------------------------------------
Hər hansı bir faylı tərcümə etməyə başlamazdan əvvəl MÜTLƏQ
aşağıdakı əmrlə yerli (lokal) nüsxənizi yeniləyin:
$ svn update

Bu, serverdəki son dəyişiklikləri kompüterinizə yükləyir və
başqasının etdiyi işin üzərinə yazmağınızın qarşısını alır.

2. KONFLİKTLƏRDƏN (ZİDDİYYƏTLƏRDƏN) QAÇMAQ (KOORDİNASİYA)
---------------------------------------
Eyni fayl üzərində eyni anda iki nəfərin işləməməsi üçün:
- İşə başlayanda komanda yoldaşınıza bildirin (məs., "Okular üzərində işləyirəm").
- Mümkünsə, böyük modulları bölüşdürün (məs: biri 'apps', digəri 'desktop').
- Kiçik hissələrlə tərcümə edib tez-tez serverə göndərin (commit edin) (böyük
  faylları günlərlə saxlamayın).

3. TƏRCÜMƏ PROSESİ (WORKFLOW)
-----------------------------
1. Faylı açın (Lokalize və ya Poedit tövsiyə olunur).
2. Tərcümələri edin.
3. Faylı yadda saxlayın.
4. Layihənin ortaq lüğətinə uyğun terminologiyaya diqqət edin.
   (Hər hansı bir çətin anlaşılan termin üzərində müzakirə xoş qarşılanır)

4. SVN-Ə GÖNDƏRMƏ (COMMIT)
--------------------------
Dəyişiklikləri serverə yükləməzdən dərhal əvvəl:
1. Bu əmr ilə təkrar yeniləyin:
   $ svn update
2. Əgər "Conflict" (C hərfi) çıxsa, dərhal koordinatora müraciət edin.
3. Hər şey qaydasındadırsa, serverə göndərin (commit edin):
   $ svn commit -m "Azerbaijani translate updated: [tətbiq adı]"
   (Qeyd: dırnaq arasındakı commit mesajını ingilscə yazmaq tövsiyyə olunur)

5. TERMİNOLOGİYA VƏ ÜSLUB
-------------------------
- Vahid terminologiya və üslub yaradılmasına ehtiyac var. Bu işdə köməyinizi əsirgəməyin

6. FAYDALI ƏMR SƏTİRLƏRİ
------------------------
- Vəziyyəti yoxlamaq üçün: svn status
- Dəyişiklikləri görmək üçün: svn diff
- Səhv etdikdə geri qaytarmaq üçün: svn revert [fayl_adı]

Uğurlar! Sizin töhfəniz Azərbaycan Linux istifadəçiləri üçün çox vacibdir.
============================================================
