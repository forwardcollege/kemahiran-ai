import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutStoryStrip } from "@/components/about-story-strip";
import { JsonLd } from "@/components/json-ld";
import { localeSchema } from "@/lib/content/schema";
import { aboutPageJsonLd, buildLocalizedMetadata } from "@/lib/seo";

const copy = {
  ms: {
    eyebrow: "Kisah kami",
    title: "Mengapa kami membina Kemahiran.AI",
    lead: "Teknologi sepatutnya membuka lebih banyak pintu.",
    introduction: [
      "Kemahiran.AI bermula selepas saya berpeluang melatih lebih 800 orang guru di beberapa negeri di Malaysia. Dalam setiap sesi, saya melihat perkara yang sama: guru mahu menggunakan AI dengan lebih baik, tetapi sumber praktikal dalam Bahasa Melayu—terutamanya untuk pendidikan—masih terhad.",
      "Jadi, kami mula membina sumber yang kami sendiri ingin lihat wujud. Sumber yang jelas, berguna dan boleh terus digunakan dalam kerja sebenar.",
      "Guru ialah titik mula kami dan akan sentiasa menjadi sebahagian penting daripada tujuan kami. Namun, visi Kemahiran.AI lebih luas: membantu lebih ramai rakyat Malaysia bekerja bersama AI dengan yakin, bertanggungjawab dan berkesan.",
    ],
    continuation: [
      "Di Forward College, kami percaya bahawa teknologi ialah penyamarata yang hebat. Apabila ilmu dan alat yang betul boleh diakses oleh lebih ramai orang, bakat tidak lagi perlu dibatasi oleh latar belakang, lokasi atau keputusan peperiksaan.",
      "Tetapi akses sahaja tidak mencukupi. AI mesti digunakan dengan pertimbangan manusia. Kita perlu menyemak maklumat, melindungi data, memahami batasannya dan bertanggungjawab terhadap keputusan yang kita buat. AI sepatutnya memperluas keupayaan manusia—bukan menggantikan tanggungjawab manusia.",
      "Kepercayaan yang sama membentuk pendidikan kami di Forward College. Program diploma kami diwujudkan untuk membuka laluan ke industri teknologi, termasuk kepada mereka yang mungkin tidak pernah dilihat sebagai calon yang “jelas” untuk bidang ini. Seseorang tidak perlu menjadi pelajar semua A untuk berhak mendapat peluang.",
      "Kami bekerjasama dengan yayasan dan syarikat untuk menyediakan subsidi yang besar dan menjadikan peluang ini lebih mudah dicapai.",
      "Bagi kami, kejayaan pendidikan bukan sekadar menamatkan silibus. Ia perlu membawa kepada pekerjaan. Segala yang dipelajari oleh pelajar mesti selari dengan keperluan industri dan membantu mereka bersedia untuk kerjaya sebenar. Selepas dua tahun bersama kami, matlamat kami adalah untuk membantu setiap pelajar melangkah ke pekerjaan pertama mereka. Pada masa ini, purata gaji permulaan graduan kami ialah RM3,200.",
      "Kemahiran.AI ialah lanjutan daripada usaha ini. Kami berkongsi sumber ini secara terbuka kerana kemajuan tidak sepatutnya bergantung pada siapa yang mampu mendapatkan akses.",
      "Jika satu sumber dapat menjimatkan masa seorang guru, membantu menghasilkan pengajaran yang lebih baik atau memberi lebih banyak ruang untuk memberi perhatian kepada pelajar, maka ia telah mencapai tujuan kami membinanya.",
    ],
    galleryLabel: "Latihan AI bersama guru di Malaysia",
    galleryTitle: "Kemahiran.AI bermula bersama para guru",
    galleryInstructions:
      "Leret atau gunakan kekunci anak panah kiri dan kanan untuk melihat semua gambar.",
    closingBefore: "Untuk mengetahui lebih lanjut tentang Forward College, ",
    closingLink: "lawati laman web kami",
    role: "Ketua Pegawai Eksekutif dan Pengasas Bersama",
    alt: [
      "Howie Chang bersama sekumpulan besar guru selepas sesi latihan AI.",
      "Howie Chang menerangkan penggunaan AI kepada guru dalam sebuah bengkel.",
      "Howie Chang mengendalikan latihan AI untuk guru dengan Jalur Gemilang di atas pentas.",
      "Guru mengikuti penerangan tentang AI dalam sesi latihan di bilik darjah.",
      "Sekumpulan guru menggunakan peranti semasa bengkel AI interaktif.",
    ],
  },
  en: {
    eyebrow: "Our story",
    title: "Why we built Kemahiran.AI",
    lead: "Technology should open more doors.",
    introduction: [
      "Kemahiran.AI began after I had the opportunity to train more than 800 teachers across several Malaysian states. In every session, I saw the same thing: teachers wanted to use AI more effectively, but practical Malay-language resources—especially for education—were still difficult to find.",
      "So we began building the resources we wished already existed: clear, useful tools that people could apply immediately in their real work.",
      "Teachers are where we started, and they will always remain an important part of why we do this. But the vision for Kemahiran.AI is broader: to help more Malaysians work alongside AI confidently, responsibly and effectively.",
    ],
    continuation: [
      "At Forward College, we believe technology is a great equaliser. When knowledge and the right tools become accessible, talent no longer has to be limited by background, geography or examination results.",
      "Access alone, however, is not enough. AI must be used with human judgment. We must verify information, protect people’s data, understand the technology’s limitations and remain accountable for the decisions we make. AI should extend human capability—not replace human responsibility.",
      "The same belief shapes our work at Forward College. Our diploma creates a path into the technology industry for people who may not have been seen as its most obvious candidates. A person should not need to be a straight-A student to deserve that opportunity.",
      "We work with foundations and companies to provide substantial subsidies and make that opportunity more accessible.",
      "For us, education is not successful simply because the syllabus was completed. It must lead somewhere. Everything our students learn should be aligned with industry and prepare them for meaningful employment. After two years with us, our goal is to help every student take that first step into the workforce. Our graduates’ current average starting salary is RM3,200.",
      "Kemahiran.AI is an extension of that work. We are sharing these resources openly because progress should not depend on who can afford access.",
      "If one resource saves a teacher time, helps create a better lesson or gives them more space to focus on their students, it has done what we built it to do.",
    ],
    galleryLabel: "AI training with teachers in Malaysia",
    galleryTitle: "Kemahiran.AI began with teachers",
    galleryInstructions:
      "Swipe or use the left and right arrow keys to view all images.",
    closingBefore: "To learn more about Forward College, ",
    closingLink: "visit our website",
    role: "CEO & Co-Founder",
    alt: [
      "Howie Chang with a large group of teachers after an AI training session.",
      "Howie Chang explaining the use of AI to teachers in a workshop.",
      "Howie Chang leading AI training for teachers with the Malaysian flag on stage.",
      "Teachers following an explanation of AI during a classroom training session.",
      "A group of teachers using devices during an interactive AI workshop.",
    ],
  },
} as const;

const aboutStoryCenterImage =
  "/images/about/about-howie-teacher-training-center-v2.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const parsed = localeSchema.safeParse((await params).locale);
  if (!parsed.success) return {};
  const locale = parsed.data;
  const text = copy[locale];

  return buildLocalizedMetadata({
    locale,
    title: text.title,
    description: text.introduction[0],
    msPath: "/ms/about",
    enPath: "/en/about",
    image: {
      url: aboutStoryCenterImage,
      width: 1600,
      height: 1000,
      alt: text.alt[2],
    },
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const parsed = localeSchema.safeParse((await params).locale);
  if (!parsed.success) notFound();
  const locale = parsed.data;
  const text = copy[locale];

  return (
    <main id="main-content" className="about-page">
      <JsonLd data={aboutPageJsonLd(locale)} />

      <article>
        <header className="about-copy about-hero">
          <p className="about-eyebrow">
            <span aria-hidden="true" />
            {text.eyebrow}
          </p>
          <h1>{text.title}</h1>
          <p className="about-lead">{text.lead}</p>
          <div className="about-prose">
            {text.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </header>

        <AboutStoryStrip
          label={text.galleryLabel}
          title={text.galleryTitle}
          instructions={text.galleryInstructions}
          alt={text.alt}
        />

        <div className="about-copy about-body">
          <div className="about-prose">
            {text.continuation.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-closing">
            <p>
              {text.closingBefore}
              <a
                href="https://forward.edu.my"
                target="_blank"
                rel="noopener noreferrer"
              >
                {text.closingLink}
                <span className="sr-only">
                  {locale === "ms"
                    ? " (dibuka dalam tab baharu)"
                    : " (opens in a new tab)"}
                </span>
              </a>
              .
            </p>
          </div>

          <footer className="about-signoff">
            <strong>Howie Chang</strong>
            <span>{text.role}</span>
            <span>Forward College</span>
          </footer>
        </div>
      </article>
    </main>
  );
}
