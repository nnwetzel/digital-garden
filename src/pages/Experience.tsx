import { PageLayout } from "@/components/PageLayout";

export const ExperiencePage = () => {
  return (
    <PageLayout>
      <div className="items-start box-border caret-transparent h-full w-full mt-10">
        <h2 className="text-2xl box-border caret-transparent leading-8 font-et_book mt-10 mb-6">
          Experience
        </h2>

        {/* Zoox */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1 gap-y-1.5">
            <h3 className="font-et_book text-base">Zoox</h3>
            <div className="flex items-baseline flex-wrap gap-x-2 gap-y-1">
              <span className="bg-slate-100 font-et_book text-sm px-2 py-0.5 rounded whitespace-nowrap">
                Foster City, CA
              </span>
              <span className="bg-slate-100 font-et_book text-sm px-2 py-0.5 rounded whitespace-nowrap">
                Jun 2026 – Sep 2026
              </span>
            </div>
          </div>
          <p className="text-slate-500 font-et_book text-base mb-2">
            Software Engineer Intern
          </p>
          <p className="font-et_book text-base leading-7">
            Incoming Summer 2026.
          </p>
        </div>

        {/* Amazon */}
        <div className="mb-10">
          {/* Shared company heading and 2025 details */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1 gap-y-1.5">
            <h3 className="font-et_book text-base">Amazon</h3>
            <div className="flex items-baseline flex-wrap gap-x-2 gap-y-1">
              <span className="bg-slate-100 font-et_book text-sm px-2 py-0.5 rounded whitespace-nowrap">
                Seattle, WA
              </span>
              <span className="bg-slate-100 font-et_book text-sm px-2 py-0.5 rounded whitespace-nowrap">
                Jun 2025 – Sep 2025
              </span>
            </div>
          </div>

          {/* 2025 internship */}
          <div className="mb-4">
            <p className="text-slate-500 font-et_book text-base mb-1">
              Software Engineer Intern
            </p>
            <p className="font-et_book text-base leading-7">
              Developed a Java service validating 10M+ transactions/month at Amazon's receivables API entrypoint, eliminating invalid custom billing attributes and ensuring accuracy at scale across billions of dollars in billing.
            </p>
          </div>

          {/* 2024 internship */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1 gap-y-1.5">
              <div className="flex-1" />
              <div className="flex items-baseline flex-wrap gap-x-2 gap-y-1">
                <span className="bg-slate-100 font-et_book text-sm px-2 py-0.5 rounded whitespace-nowrap">
                  Seattle, WA
                </span>
                <span className="bg-slate-100 font-et_book text-sm px-2 py-0.5 rounded whitespace-nowrap">
                  May 2024 – Aug 2024
                </span>
              </div>
            </div>
            <p className="text-slate-500 font-et_book text-base mb-1">
              Software Engineer Intern
            </p>
            <p className="font-et_book text-base leading-7">
              Implemented a Java metric aggregation service ensuring timely invoice delivery for 100K+ invoices/month and engineered an AWS Lambda to automate Elasticsearch metric propagation into CloudWatch.
            </p>
          </div>
        </div>
        {/* Wolters Kluwer */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1 gap-y-1.5">
            <h3 className="font-et_book text-base">Wolters Kluwer</h3>
            <div className="flex items-baseline flex-wrap gap-x-2 gap-y-1">
              <span className="bg-slate-100 font-et_book text-sm px-2 py-0.5 rounded whitespace-nowrap">
                Boston, MA
              </span>
              <span className="bg-slate-100 font-et_book text-sm px-2 py-0.5 rounded whitespace-nowrap">
                Jan 2025 – Jun 2025
              </span>
            </div>
          </div>
          <p className="text-slate-500 font-et_book text-base mb-2">
            Software Engineer Intern
          </p>
          <p className="font-et_book text-base leading-7">
            Migrated a clinical NLP dosing app to a Python microservice on AKS and orchestrated remediation for 100+ Linux hosts by developing a patching tool with Ansible and Jenkins.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
