import EmojiGame from './components/EmojiGame'

import './App.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Monkey D. Luffy',
    emojiUrl:
      'https://freebiehive.com/wp-content/uploads/2023/09/Monkey-D-Luffy-Gear-5-PNG-758x473.jpg',
  },
  {
    id: 1,
    emojiName: 'Roronoa Zoro',
    emojiUrl:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f0217fc-079b-461e-8aed-ac483a70b521/ddg2z7p-40762260-ca8b-48b1-9f27-422f2b8a3a83.png/v1/fill/w_918,h_871/coloreo_zoro_con_enma_by_samanta95_ddg2z7p-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1MCIsInBhdGgiOiJcL2ZcLzRmMDIxN2ZjLTA3OWItNDYxZS04YWVkLWFjNDgzYTcwYjUyMVwvZGRnMno3cC00MDc2MjI2MC1jYThiLTQ4YjEtOWYyNy00MjJmMmI4YTNhODMucG5nIiwid2lkdGgiOiI8PTExMDcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.dWi9gxrBNzovX_DuRUJ48HYoeBFY7GnElxNNTtFydk4',
  },
  {
    id: 2,
    emojiName: 'Vinsmoke Sanji',
    emojiUrl:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddkm466-94e71c4a-75d2-4763-83f3-1c7a197f08af.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4ZWM2MDlhLWY1ZTUtNGExNy04MzkwLTlmODE5ZmNkOGUxYlwvZGRrbTQ2Ni05NGU3MWM0YS03NWQyLTQ3NjMtODNmMy0xYzdhMTk3ZjA4YWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hqmFB1o-cO8VABuPK-b49dnecFMZzumcgeorp5BKK9k',
  },
  {
    id: 3,
    emojiName: 'Shanks',
    emojiUrl:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b5ef41a-c35f-4380-b4b9-b6c879c9386d/dekiyp7-cf80fabe-8005-420b-84e1-616b9b339362.png/v1/fill/w_1036,h_772/shanks_render_by_bykuya_dekiyp7-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc5NyIsInBhdGgiOiJcL2ZcLzRiNWVmNDFhLWMzNWYtNDM4MC1iNGI5LWI2Yzg3OWM5Mzg2ZFwvZGVraXlwNy1jZjgwZmFiZS04MDA1LTQyMGItODRlMS02MTZiOWIzMzkzNjIucG5nIiwid2lkdGgiOiI8PTI0MTEifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xYsC8cjF2TW-YKjOg3iZasEtz9aAeMPabSNlzeKKUkM',
  },
  {
    id: 4,
    emojiName: 'Saint Imu of House Nerona',
    emojiUrl:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/295fb76c-7179-4c70-a508-a1cce61a876f/deob5ez-9abceff9-d10f-4762-a600-8a47abae130e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5NWZiNzZjLTcxNzktNGM3MC1hNTA4LWExY2NlNjFhODc2ZlwvZGVvYjVlei05YWJjZWZmOS1kMTBmLTQ3NjItYTYwMC04YTQ3YWJhZTEzMGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._rlsYq3BrUEls_sZjxsUtyOx0WSGfZeG2rnf1xHdQps',
  },
  {
    id: 5,
    emojiName: 'Sabo',
    emojiUrl:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dbcd2m5-f3a95129-cac9-4013-9f91-1e2b137ea0ef.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGJjZDJtNS1mM2E5NTEyOS1jYWM5LTQwMTMtOWY5MS0xZTJiMTM3ZWEwZWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OY4tEPurGI8GC75CM0BrxVzfVWzn7_E_x4woeSkCUD4',
  },
  {
    id: 6,
    emojiName: 'Dracule Mihawk',
    emojiUrl:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dbcd4n7-dc83e6df-494d-4636-a440-dbe1e93f0572.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGJjZDRuNy1kYzgzZTZkZi00OTRkLTQ2MzYtYTQ0MC1kYmUxZTkzZjA1NzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._3M26-QqR2FMTuu6DUR1w7r7vMPFSaSC2lHBpttOJVU',
  },
  {
    id: 7,
    emojiName: 'Portgas D. Ace',
    emojiUrl:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddozni4-87b79d1d-3b13-4a7b-900b-bce4d4648a26.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4ZWM2MDlhLWY1ZTUtNGExNy04MzkwLTlmODE5ZmNkOGUxYlwvZGRvem5pNC04N2I3OWQxZC0zYjEzLTRhN2ItOTAwYi1iY2U0ZDQ2NDhhMjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dszxt-gjX-Fl9Jxf82080C9qBHXlsEkddnYMrrK1o0g',
  },
  {
    id: 8,
    emojiName: 'Marshall D. Teach',
    emojiUrl:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dcsrb90-ae79bd02-f54e-498e-b158-eaf0438c4a4a.png/v1/fit/w_640,h_512/marshall_d__teach_aka_blackbeard_by_bodskih_dcsrb90-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNTExNTgzMTYtZmQ3ZS00OGNhLWI1ZmUtODU0MmU5ZGZlMzU3XC9kY3NyYjkwLWFlNzliZDAyLWY1NGUtNDk4ZS1iMTU4LWVhZjA0MzhjNGE0YS5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.n2ieUeVtNx-GvhzKkWK35QrBl7j9UUIRntkeYBW8YC8',
  },
  {
    id: 9,
    emojiName: 'Don Quixote Doflamingo AKA',
    emojiUrl:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/948d5316-6730-4d8b-b744-59dc1718b47e/dfo3yek-ecb4af67-22ab-405f-82ed-928564804478.png/v1/fill/w_894,h_894/donquixote_doflamingo___3_by_akrononym_dfo3yek-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzk0OGQ1MzE2LTY3MzAtNGQ4Yi1iNzQ0LTU5ZGMxNzE4YjQ3ZVwvZGZvM3llay1lY2I0YWY2Ny0yMmFiLTQwNWYtODJlZC05Mjg1NjQ4MDQ0NzgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5NVble-rOLvHMWOHeYc-DHhhyjBMUF5tKFbViSykrak',
  },
  {
    id: 10,
    emojiName: 'Silvers Rayleigh',
    emojiUrl:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dbcd77b-5b2e0ff7-c63e-4d28-8515-6d024088b994.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGJjZDc3Yi01YjJlMGZmNy1jNjNlLTRkMjgtODUxNS02ZDAyNDA4OGI5OTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sJrBFkKTQFmQhOpiZ1RcLldAb0A3zXlNHw0TgfwWUjE',
  },
  {
    id: 11,
    emojiName: 'Gol D. Roger',
    emojiUrl:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/df493zh-52f08daf-170c-483f-bdba-7e7583a3522c.png/v1/fill/w_1025,h_780/roger_vs_whitebeard_by_bodskih_df493zh-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgwOSIsInBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGY0OTN6aC01MmYwOGRhZi0xNzBjLTQ4M2YtYmRiYS03ZTc1ODNhMzUyMmMucG5nIiwid2lkdGgiOiI8PTIzNzcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Y9lh7Avw_bXdUZAcyuLFS3oCFPEyeJ--Eq0gfj8exX0',
  },
]

const App = () => <EmojiGame emojisList={emojisList} />

export default App
