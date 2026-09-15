# Strona informacyjna LERTZ

To strona statyczna. Pliki `index.html`, `styles.css`, `script.js` i katalog `assets/` należy umieścić w katalogu głównym domeny wskazanym w panelu hostingu OVHcloud. Nie wgrywaj archiwum ZIP jako jedynego pliku strony.

Układ strony głównej opiera się na przesłanej makiecie LERTZ: ciemny kadr otwierający, pięć kategorii, korzyści marki, wyróżnione produkty, sekcja lifestyle, pięć etapów standardu, wsparcie i współpraca B2B. Karty kategorii oraz wyróżnionych produktów czekają na zdjęcia rzeczywistych urządzeń. Makieta służy jako wzór układu; umieszczone w niej wygenerowane zdjęcia i drobne teksty nie są źródłem parametrów produktu.

## Materiały produktowe

Do każdego modelu zbieraj: nazwę marki i symbol modelu, link do własnej oferty lub kartę produktu, fotografie produktu i zastosowań, instrukcję, zweryfikowaną specyfikację i informacje o zawartości zestawu. Pliki można przekazywać w rozmowie jako załączniki. Opisy z publicznych ofert Allegro należy porównać z dokumentacją modelu przed publikacją; zdjęcia można wykorzystać tylko przy odpowiednim prawie do ich użycia.

### Projektor HY300 PRO+

Pierwszą kartę oparto na publicznej [ofercie Allegro nr 18836302441](https://allegro.pl/produkt/projektor-led-lertz-hy-300-pro-bialy-e42e0d4c-b2f0-4b12-bc8f-0791382a4853?offerId=18836302441). W tytule oferty są hasła „Full HD” i „4K”, podczas gdy parametry i opis podają rozdzielczość natywną 1280 × 720. Na stronie produktu podana jest rozdzielczość natywna; hasła z tytułu nie zostały przedstawione jako rozdzielczość wyświetlanego obrazu. Nazwa modelu w treści to HY300 PRO+, choć adres oferty pomija znak plus; oznaczenie z tabliczki i instrukcji należy porównać przed zatwierdzeniem.

W ofercie są też deklaracje około 250 lumenów/250 ANSI, Wi-Fi 6, procesor H713, gwarancje działania konkretnych aplikacji i coroczne aktualizacje. Nie wprowadzono ich do karty bez niezależnego potwierdzenia dokumentacją tego wariantu. Zdjęcie w pierwszej karcie jest tymczasowo ładowane bezpośrednio z galerii Allegro; przed publikacją zastąp je oryginalnym plikiem udostępnionym dla strony LERTZ.

## Aktualizacje

GitHub przechowuje kod i historię zmian. Zmiana w GitHubie nie pojawi się automatycznie w OVHcloud: do czasu konfiguracji bezpiecznego procesu wdrażania zaktualizowane pliki trzeba przesłać na hosting. Roboczą wersję warto oglądać pod oddzielnym adresem testowym, a na domenę główną przenosić po sprawdzeniu tekstów, zdjęć i działania strony. Adres testowy powinien być chroniony przed publicznym indeksowaniem na poziomie hostingu; nie należy dodawać `noindex` do wspólnego kodu przeznaczonego także na domenę główną.

## Publikacja i wyszukiwanie

- Strona główna ma jeden nagłówek H1, logiczne sekcje, opis w `<title>` i meta description oraz treść czytelną bez wykonywania JavaScriptu.
- `robots.txt` dopuszcza Google i `OAI-SearchBot` do wyszukiwania strony. `GPTBot` (osobny robot dotyczący potencjalnego treningu modeli) jest wyłączony; ta decyzja nie blokuje wyszukiwarki ChatGPT.
- Po ustaleniu publicznej domeny dodaj prawidłowy adres kanoniczny, `sitemap.xml` z faktycznymi URL-ami i zgłoś domenę w Google Search Console. Nie wpisuj adresu testowego jako kanonicznego.
- Każdy rzeczywisty produkt powinien dostać osobną stronę z dokładną nazwą modelu, potwierdzonymi parametrami, zastosowaniami, zdjęciami z opisami alternatywnymi, instrukcją i informacją o wsparciu. Dodawaj dane strukturalne tylko wtedy, gdy odpowiadają widocznej, zweryfikowanej treści.
- Dane kontaktowe, właściciel marki i specyfikacje pozostają do potwierdzenia; nie twórz tych informacji na potrzeby SEO.

Widoczności w wyszukiwarkach ani odpowiedziach AI nie można zagwarantować. Efekty oceniaj po uruchomieniu publicznej strony na podstawie rzeczywistych danych z Search Console.

## Zasady redakcyjne kart produktowych

Na stronach produktów pisz bezpośrednio głosem LERTZ: opisuj korzyści, funkcje i specyfikację urządzenia, bez komentowania źródła danych ani recenzowania treści oferty. Odnośniki do źródeł i uwagi o weryfikacji pozostają w dokumentacji projektu. Nie przedstawiaj niepotwierdzonych deklaracji jako faktów; wartości techniczne podawaj precyzyjnie, bez mylących skrótów.

## Galeria zdjęć produktów

Każda karta używa tego samego komponentu `data-product-gallery`. Pierwsze zdjęcie znajduje się w `.gallery-main img`; dalsze dodaj wewnątrz `<template class="gallery-extra">` jako znaczniki `<img src="../assets/nazwa-pliku.jpg" alt="Opis ujęcia" data-caption="Krótki podpis">`. Po dodaniu drugiego zdjęcia skrypt automatycznie pokaże miniatury oraz przyciski poprzedniego i następnego zdjęcia. Jedno zdjęcie pozostaje widoczne bez pustych miniatur; kliknięcie powiększa je w oknie. Umieszczaj tylko rzeczywiste zdjęcia modelu i opisuj każde ujęcie innym tekstem alternatywnym.
