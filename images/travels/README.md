# Adding a travel photo

1. Drop a photo in this folder. JPG, under ~500KB, roughly 1200px on the
   long edge is plenty for the map popup.
   Name it `lowercase-kebab-case.jpg`, e.g. `grand-teton-wy.jpg`.

2. Open [`js/main.js`](../../js/main.js) and add an entry to the `TRAVELS`
   array near the top of the "Travels map" section:

   ```js
   {
     name: 'Grand Teton National Park, WY',
     lat: 43.7904, lng: -110.6818,
     date: '2024-09',
     photo: 'images/travels/grand-teton-wy.jpg',
     caption: 'First real boondocking test — four days off one battery bank.'
   },
   ```

   To get `lat`/`lng`: right-click the spot on [Google Maps](https://maps.google.com)
   and click the coordinates to copy them.

   `date` and `caption` are optional — leave them out (or empty) and the
   popup just won't show that line.

That's it — the pin and its popup photo show up on the map automatically.
