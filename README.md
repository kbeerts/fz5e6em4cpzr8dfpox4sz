# eWelcome Kiosk Mockup

Static mockup of a full-screen EIB-inspired self-service kiosk for visitors and employees/contractors.

## Run locally

```powershell
.\preview.ps1
```

Then open [http://127.0.0.1:4273](http://127.0.0.1:4273).

## Implemented flow

- Language selection: English, Deutsch, Nederlands, Francais
- Visitor: `Currently not available`
- Employee / Contractor:
  - `New Badge`: fully mocked flow
  - `Lost Badge`: `Currently not available`
  - `Replacement Badge`: `Currently not available`
- QR path:
  - Camera-based QR scanning using the browser's native `BarcodeDetector` API
  - Upload fallback for saved QR images
  - Unknown QR codes produce a not-found message
- No-QR path:
  - Old Legic badge collection mock
  - Identity card last-name verification mock
- Badge printing:
  - Animated print/encode sequence
  - Final badge render with EIB branding, employee label, portrait and badge number

## Demo employees

- Kris Beerts
  - QR file: `assets/qr-kris-beerts.png`
  - QR payload: `EWELCOME:EMP:KRIS-BEERTS:HB-02417`
  - Old badge: `LG-78124`
  - New badge: `HB-02417`
- Jari Rooman
  - QR file: `assets/qr-jari-rooman.png`
  - QR payload: `EWELCOME:EMP:JARI-ROOMAN:HB-02418`
  - Old badge: `LG-78125`
  - New badge: `HB-02418`
- Vincent Haemerlinck
  - QR file: `assets/qr-vincent-haemerlinck.png`
  - QR payload: `EWELCOME:EMP:VINCENT-HAEMERLINCK:HB-02419`
  - Old badge: `LG-78126`
  - New badge: `HB-02419`

## Notes

- The app caches the official EIB Group logo locally in `assets/eib-logo.png`.
- QR camera scanning works best in a Chromium-based browser served from `localhost`.
