"use client";

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Resume</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            저의 최근 활동을 담은 레쥬메입니다. 아래에서 PDF를 확인하거나
            다운로드할 수 있습니다.
          </p>
        </section>

        {/* Download Button */}
        <div className="flex justify-center mb-8">
          <a
            href="/Resume-KOR.pdf"
            download="박하준_이력서.pdf"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            이력서 다운로드
          </a>
        </div>

        {/* PDF Preview */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-[800px]">
            <iframe
              src="/Resume-KOR.pdf"
              className="w-full h-full border-0"
              title="박하준 이력서"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
