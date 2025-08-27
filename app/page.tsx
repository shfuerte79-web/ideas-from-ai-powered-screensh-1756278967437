export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: AI-Powered Screenshot to Text
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
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
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}