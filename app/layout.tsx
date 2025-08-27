import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '```json
[
  {
    "title": "Smart Note Taker",
    "description": "أداة تستخدم الذكاء الاصطناعي لتحويل لقطات الشاشة إلى نصوص منظمة، مما يسهل على المستخدمين أخذ الملاحظات من المحاضرات أو الاجتماعات.",
    "mvp_plan": "إنشاء واجهة بسيطة لتحميل لقطات الشاشة، واستخدام مكتبة OCR لتحويل النصوص، ثم تنظيم النصوص في تنسيق قابل للتصدير (مثل PDF أو Markdown)."
  },
  {
    "title": "Visual Recipe Extractor",
    "description": "أداة لتحويل لقطات الشاشة من وصفات الطعام إلى نصوص قابلة للقراءة، مما يسهل على المستخدمين حفظ الوصفات ومشاركتها.",
    "mvp_plan": "تطوير واجهة لتحميل لقطات الشاشة، واستخدام نموذج OCR لاستخراج النصوص، ثم تقديم خيارات للمستخدمين لحفظ الوصفات في قاعدة بيانات بسيطة."
  },
  {
    "title": "Document Summarizer",
    "description": "أداة تستخدم الذكاء الاصطناعي لاستخراج النصوص من لقطات الشاشة ثم تلخيص المحتوى، مما يساعد المستخدمين على فهم المحتوى بسرعة.",
    "mvp_plan": "إنشاء واجهة لتحميل لقطات الشاشة، استخدام مكتبة OCR لاستخراج النصوص، ثم تطبيق خوارزمية تلخيص بسيطة على النصوص المستخرجة."
  }
]
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}