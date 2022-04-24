---
sidebar_position: 4
---

# Program Hello World

Saat belajar bahasa pemrograman, biasanya kita akan membuat sebuah program Hello World. Program Hello World adalah sebuah program sederhana yang hanya menampilkan tulisan Hello World. Dan sebelum kita belajar lebih lanjut pada tutorial ini, kita harus mengetahui Ekstensi File Python dan Aturan Penulisan Statement Pada Basic Python.

Sekarang saatnya membuat program <i>Hello World.</i> Dimulai dengan membuat file Python, silahkan buat file Python dengan nama KelasAwanPintar.py (INGAT JANGAN BUAT FILE BERBEDA), pastikan hurup besar kecilnya harus sama.

Selanjutnya, setelah membuat file KelasAwanPintar.py, silahkan buka menggunakan IDE atau Text Editor dan Dalam tutorial ini menggunakan IDE jupyter-notebook.

Teman-teman Isi kode Python nya dengan kode sebagai berikut.

<i>Jika teman-teman tidak mengalamahi error, berarti bagus. Teman-teman susah mengikuti tutorialnya dengan baik. Namun jika ternyata ada error, berarti teman-teman kurang jeli mengikuti tutorial nya. Berikut saya bahas beberapa error yang sering terjadi.</i>

## File Python

Sebelum kita membuat kode program Python, kita perlu tahu beberapa hal tentang tata cara pembuatan file Python.

- File kode program Python disimpan dalam file dengan ekstensi .py, misal Kelas.py, Awan.py, Pintar.py dan lain-lain

## Aturan Penulisan Statement Pada Basic Python

1. Penulisan satu statement di dalam Python tidak diakhiri dengan tanda titik-koma.
2. Statement pada Pyhton dinyatakan dalam satu baris. Jadi akhir dari sebuah pernyataan adalah baris baru (new line).
3. Jika ada pernyataan yang panjangnya terdiri lebih dari 1 baris, maka dapat dilakukan dengan menggunakan tanda backslash (\).
4. Statement yang ada di dalam atau diapit oleh tanda kurung seperti "[],{},()" tidak memerlukan tanda "".
5. Python menggunakan tanda indentasi (spasi) sebagai penanda blok. Panjang spasi atau indentasi untuk setiap baris yang ada dalam satu blok kode harus sama. Bila spasi atau indentasi dalam satu grup kode tersebut tidak sama, python akan menamplikan sintaks error.
6. Sebaga penanda string, Python menggunakan tanda kutip, baik tunggal ('), maupun ganda("). Tanda kutip tiga(""") digunakan untuk string multibaris.
7. Bahasa Python bersifat case sensitif, yang berarti membedakan huruf besar dan huruf kecil (memiliki nilai yang berbeda).
8. Untuk komentar di awali dengan tanda "#" yang artinya tidak diproses sebagai statement code.

### Aturan Penulisan Statement Pada Basic Python Yang

#### 1. Penulisan satu statement di dalam Python tidak diakhiri dengan tanda titik-koma

```py title="KelasAwanPintar.py"
print ("Hello Word")
print("panjang = 100")
print('lebar = 23')

# Pada kode diatas kita membuat sebuah program sederhana. Teman-teman sekarang coba diikuti dulu.

# Jika sukses, maka akan menghasilkan output dari syntax diatas

Hello Word
panjang = 100
lebar = 23
```

#### 2. Statement pada Pyhton dinyatakan dalam satu baris. Jadi akhir dari sebuah pernyataan adalah baris baru (new line).

Selanjutnya kita isi kode Python nya dengan kode sebagai berikut.

```py title="KelasAwanPintar.py"
print("luas = panjang * lebar")
print('luas = panjang * lebar')

# Pada kode diatas kita membuat sebuah program sederhana. Teman-teman sekarang coba diikuti dulu.

# Jika sukses, maka akan menghasilkan output dari syntax diatas
luas = panjang * lebar
luas = panjang * lebar
```

#### 3. Jika ada pernyataan yang panjangnya terdiri lebih dari 1 baris, maka dapat dilakukan dengan menggunakan tanda backslash (\).

Selanjutnya kita isi kode Python nya dengan kode sebagai berikut.

```py title="KelasAwanPintar.py"
print("volume = panjang * lebar *\
 tinggi")

 # Pada kode diatas kita membuat sebuah program sederhana. Teman-teman sekarang coba diikuti dulu.

 # Jika sukses, maka akan menghasilkan output dari syntax diatas
 volume = panjang * lebar * tinggi
```

#### 4. Statement yang ada di dalam atau diapit oleh tanda kurung seperti "[],{},()" tidak memerlukan tanda "".

Selanjutnya kita isi kode Python nya dengan kode sebagai berikut.

```py title="KelasAwanPintar.py"
  nama_hari = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']
  print(nama_hari)

  # Pada kode diatas kita membuat sebuah program sederhana. Teman-teman sekarang coba diikuti dulu.

  # Jika sukses, maka akan menghasilkan output dari syntax diatas
  ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
```

#### 5. Python menggunakan tanda indentasi (spasi) sebagai penanda blok. Panjang spasi atau indentasi untuk setiap baris yang ada dalam satu blok kode harus sama. Bila spasi atau indentasi dalam satu grup kode tersebut tidak sama, python akan menamplikan sintaks error.

Selanjutnya kita isi kode Python nya dengan kode sebagai berikut.

```py title="KelasAwanPintar.py"
usia = 7
if usia >= 7:
    print("diterima masuk SD")
    print("dinyatakan lulus")
else:
    print("tidak diterima masuk SD")
    print("dinyatakan gagal")

    # Pada kode diatas kita membuat sebuah program sederhana. Teman-teman sekarang coba diikuti dulu.

    # Jika sukses, maka akan menghasilkan output dari syntax diatas
    diterima masuk sd
    dinyatakan lulus
```

#### 6. Sebaga penanda string, Python menggunakan tanda kutip, baik tunggal ('), maupun ganda("). Tanda kutip tiga(""") digunakan untuk string multibaris.

Selanjutnya kita isi kode Python nya dengan kode sebagai berikut.

```py title="KelasAwanPintar.py"
namadepan = 'Kelas'
namalengkap = "Kelas Awan Pintar"
alinea = """Berikut ini adalah alinea
yang terdiri dari beberapa baris."""
print(namadepan)
print(namalengkap)
print(alinea)

# Pada kode diatas kita membuat sebuah program sederhana. Teman-teman sekarang coba diikuti dulu.

# Jika sukses, maka akan menghasilkan output dari syntax diatas
Kelas
Kelas Awan Pintar
Berikut ini adalah alinea
yang terdiri dari beberapa baris.
```

#### 7. Bahasa Python bersifat case sensitif, yang berarti membedakan huruf besar dan huruf kecil (memiliki nilai yang berbeda).

Selanjutnya kita isi kode Python nya dengan kode sebagai berikut.

```py title="KelasAwanPintar.py"
# Contoh statement yang benar
luas = 15*3
print(luas)

# Jika sukses, maka akan menghasilkan output dari syntax diatas
45

# Pada kode diatas kita membuat sebuah program sederhana. Teman-teman sekarang coba diikuti dulu.

# Contoh statement yang salah
#luas = 15*3
#Print(luas)
#PRINT(luas)
```

#### 8. Untuk komentar di awali dengan tanda "#" yang artinya tidak diproses sebagai statement code.

Selanjutnya kita isi kode Python nya dengan kode sebagai berikut.

```py title="KelasAwanPintar.py"
# panjang = 15
# lebar = 3
# luas = (panjang*lebar)
# print(luas)

# Pada kode diatas kita membuat sebuah program sederhana. Teman-teman sekarang coba diikuti dulu.
```

### Error : Lupa dengan tanda titik-koma

```shell
File "<ipython-input-1-15e524463a94>", line 1
    print (hello word)
                    ^
SyntaxError: invalid syntax
```

Jika terjadi error seperti diatas, <i>SyntaxError: invalid syntax.</i>

Syntax Error adalah suatu keadaan saat kode python mengalami kesalahan penulisan.

Python interpreter dapat mendeteksi kesalahan ini saat kode dieksekusi.

### Error : EOL while scanning string literal

```shell
File "<ipython-input-2-f7de7ca50565>", line 2
print("panjang = 100)
^
SyntaxError: EOL while scanning string literal
```

Jika terjadi error seperti diatas, <i>EOL while scanning string literal.</i>

EOL adalah singkatan dari " End of line ,"

Ada kesalahan Sintaks berarti bahwa kami tidak mengikuti pedoman Pemrograman Python.

Maksudnya adalah Python adalah bahasa yang ditafsirkan yang berarti, tidak seperti bahasa lain ( Java, C++, C#, dll. ), Python tidak mengubah seluruh kode menjadi kode mesin tingkat rendah sekaligus melainkan, setiap baris kode dieksekusi baris demi baris.

Kesalahan EOL biasanya terjadi karna <i>"kehilangan tanda kurung"</i>, <i>"tanda kutip hilang"</i>, <i>"ketidakcocokan if-else"</i>, dll.

Berikut kesalahan Sintaks <i>EOL</i> di Python biasanya terjadi beberapa kasus diantaranya:

- Tanda kutip hilang
- Menggunakan string beberapa baris dan menggunakan sintaks yang salah
- Kutipan yang tidak cocok
- Menggunakan garis miring terbalik

### Error : File Tidak Ditemukan

```shell
#print(luas = panjang * lebar)

ameError                                 Traceback (most recent call last)
<ipython-input-12-389fc960dc39> in <module>()
----> 1 print(luas = panjang * lebar)

NameError: name 'panjang' is not defined
```

Jika terjadi error seperti diatas, berarti.
Variable panjang tidak didefinisikan atau tidak dikenal.
Sedangkan variabel yang berusaha kita panggil adalah <i>"luas = panjang \* lebar"</i>.

Solusinya adalah perhatikan lagi sintaks Python yang sudah di jelaskan di atas.

Demikianlah tutorial tentang program Hello World di Python dan tutorial tentang Aturan Penulisan Statement Pada Basic Python. Jika teman-teman masih mendapat error, namun berbeda errornya dari yang saya jelaskan. Silahkan masukkan di komentar, bisa cari di komunitas [Stackoverflow](https://stackoverflow.com/) atau di Google.com.

Selamat belajar Python dan Keep Learning Sahabat Kelas Awan Pintar

<i>Note: CODING BUKAN UNTUK DI HAFAL MELAINKAN DI PAHAMI KONSEP DAN LOGIKA</i>
