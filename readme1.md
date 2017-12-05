kalo mau iseng iseng, nyoba bash online di windows hehe
https://www.tutorialspoint.com/execute_bash_online.php

//cara login di bash IPB :v
ssh username@172.18.12.12



Latihan UASP
# pindah ke direktori home anda
cd /home

# buat satu folder kosong 'test'
mkdir test

# masuk ke direktori 'test'
cd test

# tampilkan path direktori saat ini
pwd

# buat file kosong bernama 'empty.txt'
nanotouchnano empty.txt
nano empty.txt
touch empty.txt

# copy file '/etc/timezone' ke direktori ‘ini’
cp /etc/timezone ini

# ubah nama file 'timezone' menjadi 'tz'
mv timezone tz

# list isi direktori ini
ls  

# pindah ke direktori parent
cd ..

# hapus direktori 'test' seisinya
rm -r test

# temukan file dengan nama 'fdisk' memakai `locate`
locate fdisk


# temukan file dengan nama 'fdisk' memakai `find`
find -iname fdisk

# temukan file pada home anda yang ukurannya > 200 MB
find -size +200M

# temukan file pada home anda yang diubah < 3 hari
find . -mtime -3

# tampilkan 5 baris pertama keluaran perintah `last`
last -5

# tampilkan dua baris terakhir file '/etc/passwd
tail -n 2 /etc/passwd

# cari file di '/usr/include' yang memuat kata 'sem_post
cd /usr/include | find -iname 'sem_post'

# tampilkan kolom 1 dan 5 dari file '/etc/passwd'
cut -f 1,5 /etc/passwd

# tampilkan isi file '/etc/motd' dalam huruf kapital
cat /etc/motd | tr [:lower:]  [:upper:]

# buka manual untuk `gittutorial’
man gittutorial

# hentikan sementara dengan menekan tombol:
(ctrl+z) -> iya ga sih?? hehe >> benr kok

# tampilkan daftar job
jobs

# lanjutkan program manual di atas pada foreground
fg

# tutup program manual dengan menekan tombol:
(ctrl+c) 


..
Catetan LMS 
(Kisi Kisi yg dari Bang wil)
echo
Menampilkan satu baris teks. 

echo [OPTION] [STRING] 
-n: newline di akhir dihilangkan 
-e: escape dengan backslash diaktifkan

echo “Hello World!” 	//nampilin tulisan “Hello World!”

hostname
Menampilkan nama host sistem. 

hostname [OPTION] 
-I: tampilkan alamat IP

hostname	//nampilin nama host
hostname -I	//nampilin alamat IP


uname
Menampilkan informasi kernel sistem. 

uname [OPTION] 
-a: (all) tampilkan semua informasi kernel

uname		//nampilin informasi kernel sistem
uname -a	//nampilin semua informasi kernel

date
Mencetak tanggal dan waktu sistem. 

date [+FORMAT]

date			//Tue Dec  5 02:14:48 UTC 2017
date +%Y 		//2017
date +%d		//05
date +%m		//12
date +%D		//12/05/17
date +%d-%m-%Y	//12-05-2017

cal
Menampilkan kalender. 

cal [[MONTH] YEAR] 

cal		//bulan sekarang, tahun sekarang
cal Jan		//bulan januari, tahun sekarang
cal Jan	uary	//bulan januari, tahun sekarang
cal 2015	//semua bulan, tahun 2015
cal Jan 2015	//bulan januari, tahun 2015

who
Menampilkan siapa saja yang sedang login. 

who [OPTION] 
-q: (quantity) jumlah user yang sedang login 
-w: write status untuk pesan (+, -, ?)
who		//menampilkan siapa saja yang sedang login
who -q		//jumlahnya


cd
Mengganti direktori. 

cd [DIRECTORY] 

Jika tanpa parameter, maka cd akan pindah ke direktori home pengguna (~). 

cd 		//pindah ke direktori home
cd ..		//mundur
cd /hehe	//maju ke folder hehe

pwd
tampilkan path direktori saat ini

pwd 	// home/hehe

mkdir
Membuat direktori. 
mkdir [OPTION] DIRECTORY 
-p: parent; buat direktori parent jika diperlukan
mkdir hehe		//buat folder(direktori) hehe

touch
membuat file baru

touch hehe.txt		//membuat file hehe.txt

cp
menduplikasi file dr 1 direktori ke direktori lain

cp hehe.txt home/student desktop/hehe		
//menduplikasi file hehe.txt dari home/student ke dekstop/hehe

mv
mengganti nama file

mv timezone tz		//mengganti file namanya “timezone” menjadi “tz”

ls
mengetahui list dari direktori saat ini, ada banyak optionnya,

ls [OPTION] [FILE] 
-a: all; tampilkan dotfile 
-h: human-readable; format ukuran mudah dibaca 
-i: inode; cetak nomor indeks 
-l: long; format panjang 
-r: reverse; balik urutan list 
-S: size; urutkan berdasarkan ukuran 


ls	//nampilin ada apa aja file dan direktori saat ini
ls -l 	//menampilkan list panjang (long), berisi di dalamnya permission

chmod
Mengubah permission dari suatu file
permission:
user -  group - otherMengganti mode permission suatu file. 
chmod [OPTION] MODE[,MODE]... FILE... 
chmod [OPTION] OCTAL-MODE FILE... 
-R: recursive; berlaku pada direktori dan seisinya

ln
Membuat link antar-file. 

ln [OPTION] TARGET LINK-NAME 
-s: symbolic; buat symlink

locate
Mencari lokasi file berdasarkan namanya pada database. 

locate [OPTION] 'PATTERN' 
-i: insensitive; abaikan case 
-c: count; cetak jumlah file yang ditemukan

find
Mencari file langsung pada sebuah hierarki direktori. 

find [PATH] [TEST]... 
-name 'PATTERN' 
-iname 'PATTERN' 
-size [+-]N[kMG] 
-atime [+-]N 
-mtime [+-]N 
-empty 
-type [dfl] 

wc
Mencetak jumlah baris, kata, dan karakter dari suatu file. 
wc [OPTION] [FILE...] 
-c: char; cetak jumlah karakter 
-w: word; cetak jumlah kata 
-l: line; cetak jumlah baris

grep
Mencetak baris teks yang cocok dengan suatu pola. 
grep [OPTION] 'PATTERN' FILE 
-c: count; tampilkan jumlah baris 
-i: insensitive; abaikan case 
-v: invert; kebalikan dari pola yang diberikan 
-r: rekursif

head
Menampilkan bagian awal file. 
head [OPTION] [FILE] 
-n K: lines; tampilkan K baris pertama 
-b K: bytes; tampilkan K byte pertama

head -n 10 hehe.txt		//nampilin 10 baris pertama di file hehe.txt

tail
tail Menampilkan bagian akhir file. 
tail [OPTION] [FILE] 

-n K: lines; tampilkan K baris terakhir 
-b K: bytes; tampilkan K byte terakhir 
-f: follow; ikuti penambahan isi file

sed
Stream editor, manipulasi baris teks dengan regular expression. 
sed [OPTION] 's/SEARCH/REPLACE/' [FILE] 
-e: execute; tambahkan perintah untuk dieksekusi 
-i: in-place; edit file langsung

sort
Mengurutkan baris teks pada file. 
sort [OPTION] [FILE] 
-n: numeric; urutkan secara numerik 
-r: reverse; urutkan terbalik

uniq
Menghilangkan baris teks yang berulang. 
uniq [OPTION] [FILE] 
-c: count; tampilkan jumlah kemunculan 
-i: ignore-case 
-u: unique; cetak baris yang unik saja 
-d: duplicate; cetak baris yang berulang saja

uniq hehe.txt		//menghilangkan baris teks yang berulang di hehe.txt
uniq -u hehe.txt	//mencetak baris yang unik saja di file hehe.txt

cut
Mengambil karakter/kolom tertentu dari tiap baris teks. 
cut OPTION [FILE] 
-c N-M: char; cetak karakter N–M 
-f N-M: field; cetak kolom N–M 
-d DELIM: delimiter; pemisah antarkolom

tr
Translasi karakter dari set pertama ke set kedua. 
tr [OPTION] SET1 [SET2] 
-d: delete; hapus karakter pada SET1 
-s: squeeze; hapus karakter yang berulang pada SET1 

ps
Menampilkan cuplikan informasi proses yang sedang berjalan. 
ps [OPTION] 
-e: every; semua proses 
-F: full; format ekstra lengkap 
-L: lightweight; tampilkan info LWP (thread) 
--forest: format pohon proses 

nice
Menjalankan program dengan nilai nice2 tertentu (default: 10). 
nice [-n NICE] COMMAND 

renice
Mengubah prioritas proses yang sudah berjalan. 
renice [-n] NICE PID

pidof
Mendapatkan PID dari program yang sedang berjalan. 
pidof PROGRAM

kill
Mengirim sinyal ke suatu proses (default SIGTERM). 
kill [-SIGNAL] PID...

jobs
Menampilkan daftar job yang sedang aktif. 
jobs



