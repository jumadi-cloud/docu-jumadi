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

Jika terjadi error seperti diatas, berarti Syntax Error.
Syntax Error adalah suatu keadaan saat kode python mengalami kesalahan penulisan.
Python interpreter dapat mendeteksi kesalahan ini saat kode dieksekusi.

### Error : Lupa dengan tanda titik-koma1

```shell
File "<ipython-input-2-f7de7ca50565>", line 2
print("panjang = 100)
^
SyntaxError: EOL while scanning string literal
```

EOL adalah singkatan dari " End of line ,"
Ada kesalahan Sintaks berarti bahwa kami tidak mengikuti pedoman Pemrograman Python.

Di Python biasanya terjadi beberapa kasus diantaranya
Tanda kutip hilang, kutipan yang tidak cocok, Menggunakan garis miring terbalik
sebelum tanda kutip akhir, String yang merentang beberapa baris menggunakan sintaks yang salah

### Error saat kompilasi kode Python pada Statement pada Pyhton dinyatakan dalam satu baris. Jadi akhir dari sebuah pernyataan adalah baris baru (new line).

```shell
#print(luas = panjang * lebar)

ameError                                 Traceback (most recent call last)
<ipython-input-12-389fc960dc39> in <module>()
----> 1 print(luas = panjang * lebar)

NameError: name 'panjang' is not defined
===================================================================================
Jika terjadi error seperti diatas, berarti.
Variable panjang tidak didefinisikan atau tidak dikenal.
Sedangkan variabel yang berusaha kita panggil adalah "luas = panjang * lebar".
===================================================================================
```

<!-- ## Error Saat Kompilasi Kode Java

Jika teman-teman tidak mengalamahi error, berarti bagus. Teman-teman susah mengikuti tutorialnya dengan baik. Namun jika ternyata ada error, berarti teman-teman kurang jeli mengikuti tutorial nya. Berikut saya bahas beberapa error yang sering terjadi.

### Error : File Tidak Ditemukan

```shell
javac ProgramHelloWorld.java
error: file not found: ProgramHelloWorld.java
Usage: javac <options> <source files>
use --help for a list of possible options
```

Jika terjadi error seperti diatas, berarti file Java yang dikompilasi tidak ditemukan. Kemungkinannya antara nama file yang teman-teman ketik salah. Atau teman-teman tidak berada di folder yang sama dengan file Java nya. Silahkan perbaiki nama file Java nya, atau silahkan pindah ke folder dimana teman-teman menyimpan file java nya dengan menggunakan perintah cd diikuti folder lokasinya, misal : cd /Users/khannedy/Projects/BelajarJava/

### Error : Nama Class Salah

```shell
javac ProgramHelloWorld.java
ProgramHelloWorld.java:1: error: class ProgramHelloworld is public, should be declared in a file named ProgramHelloworld.java
public class ProgramHelloworld {
       ^
1 error
```

Jika teman-teman mengalami error seperti diatas, artinya nama class nya berbeda dengan nama file Java nya. Saya sudah jelaskan diatas kalo nama class harus sama dengan nama file, dan juga besar kecil huruf nya harus sama, karena di Java case sensitive. Jadi jika nama file nya ProgramHelloWorld.java, nama nama class nya harus ProgramHelloWorld. Silahkan diperbaiki lagi

### Error : Lupa Titik Koma

```shell
javac ProgramHelloWorld.java
ProgramHelloWorld.java:5: error: ';' expected
    System.out.println("Hello World")
                                     ^
1 error
```

Jika mengalami error seperti diatas. Berarti kita lupa menambahkan tanda ; (titik koma). Di Java semua kode program harus diakhiri dengan ; (titik koma). Silahkan tambahkan titik koma.

## Menjalankan Program Java

Jika sudah sukses melakukan kompilasi, saatnya menjalankan file hasil kompilasinya dengan extensi .class menggunakan JRE. Untuk menjalankan file binary tersebut, kita bisa menggunakan perintah java diikuti dengan nama file nya, namun tidak perlu menambahkan ekstensi .class nya, misal : java ProgramHelloWorld

```shell
java ProgramHelloWorld
Hello World
```

Jika setelah di ENTER keluar tulisan Hello World, selamat, berarti kita sudah berhasil membuat program Hello World menggunakan Java.

## Error Saat Menjalankan Program Java

Jika teman-teman gagal menjalankan program Java, berarti ada yang salah dengan file binary nya. Berikut saya jelaskan beberapa error yang sering dihadapi.

### Error : Class Tidak Ditemukan

```shell
java ProgramHelloworld
Error: Could not find or load main class ProgramHelloworld
Caused by: java.lang.NoClassDefFoundError: ProgramHelloWorld (wrong name: ProgramHelloworld)
```

Jika kita mendapatkan error seperti diatas, artinya kita salah mengetikkan nama file nya. Ingat di Java itu case sensitive, pastikan mengetikkan nama file yang benar dengan file binary .class yang sudah terbuat

### Error : Main Method Tidak Ditemukan

```shell
java ProgramHelloWorld
Error: Main method not found in class ProgramHelloWorld, please define the main method as:
   public static void main(String[] args)
or a JavaFX application class must extend javafx.application.Application
```

Jika kita mendapat error diatas, itu artinya main method tidak ditemukan. Biasanya ini karena kita salah membuat nama method nya. Ingat harus sama, silahkan ubah lagi kode program nya, dan pastikan nama method nya harus : public static void main(String[] args). Hurup besar kecil nya harus sama. Setelah dirubah, JANGAN LUPA LAKUKAN KOMPILASI ULANG.

--- -->

Demikianlah tutorial tentang program Hello World di Java. Jika teman-teman masih mendapat error, namun berbeda errornya dari yang saya jelaskan. Silahkan masukkan di komentar.

Jika nama file sebelumnya yang kita buat adalah KelasAwanPintar, besar kecilnya harus sama karena Java adalah bahasa pemrograman yang case sensitive (artinya huruf besar dan kecil dianggap berbeda).
