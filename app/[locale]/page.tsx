import { CheckCircle, XCircle, Clock, MessageSquare, Users, Zap, Lightbulb, Heart } from "lucide-react"
import { getTranslations } from "@/lib/translations"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = getTranslations(locale)

  const { title, highlight } = t

  function renderHighlightedTitle(title: string, highlight: string) {
    const parts = title.split(new RegExp(`(${highlight}\\w*)`, "gi"))
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase().startsWith(highlight.toLowerCase()) ? (
            <span key={i} className="text-destructive font-semibold">
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </>
    )
  }

  function renderMessages(
    messages: { role: string; RoleText?: string; time: string; message: string }[],
    t: any
  ) {
    return messages.map((msg, i) => (
      <div key={i}>
        <div className="flex items-center gap-3 mt-4">
          {msg.role.toLowerCase() === "wait" ? (
            <>
              <Clock className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-muted-foreground font-medium">{msg.message}</span>
            </>
          ) : (
            <>
              <div
                className={`w-3 h-3 rounded-full ${
                  msg.role.toLowerCase() === "you"
                    ? "bg-blue-500"
                    : msg.role.toLowerCase() === "colleague"
                    ? "bg-primary"
                    : "bg-gray-400"
                } ${msg.role.toLowerCase() === "you" && i === 0 ? "animate-pulse" : ""}`}
              ></div>
              <span className="text-muted-foreground font-medium">
                {msg.RoleText || msg.role} {msg.time}
              </span>
            </>
          )}
        </div>
        {msg.role.toLowerCase() !== "wait" && (
          <div
            className={`p-4 ml-6 rounded-2xl shadow-sm mt-1
              ${
                msg.role.toLowerCase() === "you"
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100"
                  : msg.role.toLowerCase() === "colleague"
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-gray-100 dark:bg-gray-800/30 text-gray-700 dark:text-gray-200"
              }
            `}
          >
            {msg.message}
          </div>
        )}
      </div>
    ))
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-card/30 to-secondary/20">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium">{t.badge}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            {renderHighlightedTitle(title, highlight)}
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed opacity-90"
            dangerouslySetInnerHTML={{ __html: t.subtitle }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="mb-20 text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.example}</span>
            </div>
            <p
              className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: t.phoneExample }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-20 items-stretch">
          <div className="flex-1 group h-full flex flex-col">
            <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 rounded-2xl p-8 border-l-4 border-destructive shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-destructive/10 rounded-full">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t.wrongWay.config.title}</h2>
              </div>
              <div className="bg-card rounded-xl p-6 mb-6 border border-border shadow-sm font-mono text-sm">
                {renderMessages(t.wrongWay.messages, t)}
              </div>
              <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-destructive font-medium">{t.wrongWay.config.solution}</p>
              </div>
            </div>
          </div>

          <div className="flex-1 group h-full flex flex-col">
            <div className="bg-gradient-to-br from-green-500/5 to-green-100/10 rounded-2xl p-8 border-l-4 border-green-500 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-500/10 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t.rightWay.config.title}</h2>
              </div>
              <div className="bg-card rounded-xl p-6 mb-6 border border-border shadow-sm font-mono text-sm">
                {renderMessages(t.rightWay.messages, t)}
              </div>
              <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-primary font-medium">{t.rightWay.config.solution}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              {t.why.title}
            </h2>
            <div className="space-y-4">
              {t.why.reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/50 hover:bg-card/70 transition-colors"
                >
                  <div className="p-1 bg-primary/10 rounded-full mt-1">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  </div>
                  <span className="text-foreground leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              {t.tips.title}
            </h2>
            <div className="space-y-6">
              {t.tips.list.map((tip, index) => (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:bg-card/70"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-1 bg-primary/10 rounded-full mt-1">
                      <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg">{tip.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed ml-7">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="text-center border-t border-border/50 pt-12">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-lg font-medium text-foreground">{t.footer.title}</span>
            </div>
            <p className="text-muted-foreground mb-4">{t.footer.subtitle}</p>
            <p className="text-xs text-muted-foreground/70">
              Copyright NoXi [ Discord: notfoundofficial | 375399152462462976 ]
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}