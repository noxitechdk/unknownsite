import { Heart, Globe, Code, Shield } from "lucide-react"
import { getTranslations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

function renderHighlightedText(text: string, highlights: string[]) {
  let result = text;
  highlights.forEach(highlight => {
    const regex = new RegExp(`(${highlight}\\w*)`, "gi");
    result = result.replace(regex, match => 
      `<span class="text-destructive font-semibold">${match}</span>`
    );
  });
  return (
    <span dangerouslySetInnerHTML={{ __html: result }} />
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {renderHighlightedText(t.title, t.highlight)}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {renderHighlightedText(t.subtitle, t.highlight)}
          </p>
        </section>

        <section className="py-12">
          <div className="h-24 w-full"></div>
        </section>

        <footer className="text-center border-t border-border/50 pt-12 mt-24">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-lg font-medium text-foreground">
                {t.footer.madeBy} NoXi
              </span>
            </div>
            <Link 
              href="https://github.com/noxitechdk/unknownsite" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <p className="underline text-muted-foreground mb-4">{t.footer.openSource}</p>
            </Link>
            <p className="text-xs text-muted-foreground/70">
              Copyright NoXi [ Discord: notfoundofficial | 375399152462462976 ]
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
};