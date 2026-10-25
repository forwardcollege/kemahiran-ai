# Persediaan sumber DSKP

## Bahasa Melayu

Pakej generik ini tidak mengandungi PDF DSKP rasmi.

1. Dapatkan PDF DSKP yang sah bagi mata pelajaran dan tahun atau tingkatan anda daripada sumber yang dibenarkan.
2. Pastikan tajuk, pihak penerbit, edisi atau tarikh penerbitan dan tahap dokumen boleh dikenal pasti.
3. Salin PDF ke dalam folder `references/` pakej ini.
4. Namakan fail secara jelas, contohnya `dskp-sains-tahun-5-edisi-2021.pdf`.
5. Jika mahu, salin `source-manifest.template.yml`, namakan semula sebagai `source-manifest.yml` dan lengkapkan butirannya.
6. Muat naik semula keseluruhan folder atau fail ZIP sebagai satu Skill Gemini.
7. Jalankan ujian ringkas: minta Skill menyatakan tajuk dokumen, pihak penerbit, mata pelajaran, tahap dan satu rujukan standard. Jika nombor halaman bercetak berbeza daripada nombor halaman pemapar PDF, pastikan kedua-duanya dinyatakan.
8. Semak secara visual bahawa kod standard, pernyataan standard dan nota yang digunakan datang daripada baris jadual yang sama. Jangan gunakan Skill jika sumber atau hubungan baris jadual tidak dikenal pasti dengan betul.
9. Jalankan satu ujian input tidak lengkap dengan meninggalkan tempoh atau bahan. Skill mesti meminta maklumat yang hilang dan tidak boleh menganggap nilai lalai.

Jika beberapa PDF dimasukkan, pengguna perlu menyatakan mata pelajaran, tahap dan edisi setiap kali. Skill mesti meminta pengesahan jika lebih daripada satu dokumen mungkin sepadan.

Jangan tambahkan rekod murid, nota mesyuarat, kata laluan atau dokumen sulit ke dalam pakej.

## English

This generic package does not contain an official DSKP PDF.

1. Obtain an authorised DSKP PDF for your subject and year or form.
2. Confirm that its title, issuing authority, edition or publication date and level are identifiable.
3. Copy the PDF into this package's `references/` folder.
4. Give it a clear filename, such as `dskp-science-year-5-2021-edition.pdf`.
5. Optionally copy `source-manifest.template.yml`, rename it `source-manifest.yml` and complete its fields.
6. Upload the complete folder or ZIP again as one Gemini Skill.
7. Run a short check: ask the Skill to state the document title, issuing authority, subject, level and one standard reference. If the printed page number differs from the PDF viewer page, confirm that it reports both.
8. Visually confirm that the standard code, standard wording and any supporting note come from the same table row. Do not use the Skill if it cannot identify the source or table-row relationship correctly.
9. Run one incomplete-input test by omitting the duration or materials. The Skill must request the missing information and must not assume a default.

When several PDFs are present, state the subject, level and edition for each request. The Skill must ask for confirmation when more than one document could match.

Do not add student records, meeting notes, passwords or confidential documents to the package.
