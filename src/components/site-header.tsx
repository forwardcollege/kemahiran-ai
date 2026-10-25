"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpenIcon,
  BooksIcon,
  ChatTextIcon,
  CompassIcon,
  HeartIcon,
  ImageIcon,
  ListIcon,
  MagicWandIcon,
  PlusCircleIcon,
  QuestionIcon,
  SignInIcon,
  XIcon,
} from "@phosphor-icons/react/ssr";
import type { Locale } from "@/lib/content/schema";

const labels = {
  ms: {
    collection: "Koleksi",
    allResources: "Semua sumber",
    skills: "Kemahiran AI",
    prompts: "Prompt LLM",
    visual: "Imej & Video",
    favourites: "Kegemaran",
    request: "Minta sumber",
    about: "Tentang",
    signIn: "Log masuk",
    menu: "Buka menu",
    close: "Tutup menu",
    openAccess: "Akses terbuka",
    openAccessBody: "Teroka semua sumber tanpa perlu log masuk.",
  },
  en: {
    collection: "Collections",
    allResources: "All resources",
    skills: "AI Skills",
    prompts: "LLM Prompts",
    visual: "Image & Video",
    favourites: "Favourites",
    request: "Request a resource",
    about: "About",
    signIn: "Sign in",
    menu: "Open menu",
    close: "Close menu",
    openAccess: "Open access",
    openAccessBody: "Explore every resource without signing in.",
  },
} as const;

export function SiteHeader({
  locale,
  counts,
}: {
  locale: Locale;
  counts: { skills: number; prompts: number; visual: number };
}) {
  const copy = labels[locale];
  const pathname = usePathname();
  const other = locale === "ms" ? "en" : "ms";
  const counterpartPath = pathname.replace(/^\/(ms|en)(?=\/|$)/, `/${other}`);
  const collectionLinks = [
    {
      label: copy.allResources,
      href: `/${locale}`,
      count: counts.skills + counts.prompts + counts.visual,
      icon: BooksIcon,
      home: true,
    },
    {
      label: copy.skills,
      href: `/${locale}/skills`,
      count: counts.skills,
      icon: BookOpenIcon,
    },
    {
      label: copy.prompts,
      href: `/${locale}/llm-prompts`,
      count: counts.prompts,
      icon: ChatTextIcon,
    },
    {
      label: copy.visual,
      href: `/${locale}/visual-prompts`,
      count: counts.visual,
      icon: ImageIcon,
    },
  ];
  const utilityLinks = [
    { label: copy.favourites, icon: HeartIcon, disabled: true },
    { label: copy.request, icon: PlusCircleIcon, disabled: true },
    { label: copy.about, icon: QuestionIcon, disabled: true },
  ];

  const isActive = (href: string, home = false) => {
    if (home) return pathname === `/${locale}`;
    return pathname.startsWith(href.split("?")[0]);
  };

  const navigation = (
    <>
      <div className="sidebar-brand">
        <Link href={`/${locale}`} aria-label="Kemahiran.AI">
          <span className="brand-mark" aria-hidden="true">
            <MagicWandIcon weight="bold" />
          </span>
          <span className="brand-name">
            Kemahiran<span>.AI</span>
          </span>
        </Link>
        <p>Powered by Forward College</p>
      </div>

      <nav
        className="sidebar-nav"
        aria-label={locale === "ms" ? "Navigasi utama" : "Primary navigation"}
      >
        <NavGroup label={copy.collection}>
          {collectionLinks.map(({ icon: Icon, ...link }) => (
            <NavLink
              key={link.href}
              {...link}
              active={isActive(link.href, link.home)}
              icon={
                <Icon
                  weight={isActive(link.href, link.home) ? "fill" : "regular"}
                />
              }
            />
          ))}
        </NavGroup>
        <div className="sidebar-divider" />
        <div className="sidebar-links">
          {utilityLinks.map(({ icon: Icon, ...link }) => (
            <NavLink
              key={link.label}
              {...link}
              active={false}
              icon={<Icon weight="regular" />}
            />
          ))}
        </div>
      </nav>

      <div className="sidebar-bottom">
        <div className="access-note">
          <CompassIcon aria-hidden="true" weight="regular" />
          <div>
            <strong>{copy.openAccess}</strong>
            <p>{copy.openAccessBody}</p>
          </div>
        </div>
        <div className="sidebar-account">
          <span
            aria-disabled="true"
            title={
              locale === "ms"
                ? "Akan datang dalam fasa akaun"
                : "Coming in the account phase"
            }
          >
            <SignInIcon aria-hidden="true" weight="regular" />
            {copy.signIn}
          </span>
          <Link
            href={counterpartPath}
            hrefLang={other === "ms" ? "ms-MY" : "en-MY"}
            className="language-link"
          >
            {other === "ms" ? "BM" : "EN"}
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <>
      <aside className="desktop-sidebar">{navigation}</aside>
      <header className="mobile-header">
        <Link
          href={`/${locale}`}
          className="mobile-brand"
          aria-label="Kemahiran.AI"
        >
          <span className="brand-mark" aria-hidden="true">
            <MagicWandIcon weight="bold" />
          </span>
          <span className="brand-name">
            Kemahiran<span>.AI</span>
          </span>
        </Link>
        <div className="mobile-header-actions">
          <Link href={counterpartPath} className="mobile-language">
            {other === "ms" ? "BM" : "EN"}
          </Link>
          <details className="mobile-menu">
            <summary>
              <ListIcon
                className="menu-open-icon"
                aria-hidden="true"
                weight="bold"
              />
              <XIcon
                className="menu-close-icon"
                aria-hidden="true"
                weight="bold"
              />
              <span className="sr-only">{copy.menu}</span>
            </summary>
            <div className="mobile-menu-panel">{navigation}</div>
          </details>
        </div>
      </header>
    </>
  );
}

function NavGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="sidebar-group">
      <p>{label}</p>
      <div className="sidebar-links">{children}</div>
    </section>
  );
}

function NavLink({
  label,
  href,
  icon,
  count,
  active,
  disabled = false,
}: {
  label: string;
  href?: string;
  icon: React.ReactNode;
  count?: number;
  active: boolean;
  home?: boolean;
  disabled?: boolean;
}) {
  if (disabled || !href) {
    return (
      <span className="nav-disabled" aria-disabled="true" title="Akan datang">
        <span className="nav-icon" aria-hidden="true">
          {icon}
        </span>
        <span>{label}</span>
      </span>
    );
  }
  return (
    <Link
      href={href}
      className={active ? "is-active" : ""}
      aria-current={active ? "page" : undefined}
    >
      <span className="nav-icon" aria-hidden="true">
        {icon}
      </span>
      <span>{label}</span>
      {count !== undefined ? <span className="nav-count">{count}</span> : null}
    </Link>
  );
}
