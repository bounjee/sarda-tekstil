# Admin Access

Admin paneli sadece yetkili kişiler tarafından kullanılmalıdır. Giriş bilgilerini kod tabanında saklamayın.

## Ortam Değişkenleri

`.env.local` dosyanıza aşağıdakileri ekleyin ve bu dosyayı asla commit etmeyin:

```
ADMIN_USERNAME=sardatekstil
ADMIN_PASSWORD=ahmet_berat_alper130*A
ADMIN_SESSION_SECRET=bounjee
```

## Koruma

- `/admin` rotaları middleware ile korunur.
- Başarılı girişte `admin_session` isimli HttpOnly cookie ayarlanır.
- Cookie değeri `ADMIN_SESSION_SECRET` ile doğrulanır.


