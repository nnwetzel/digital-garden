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
            Built a standardized, org-wide self-service pipeline to provision AWS EC2 and VMware hosts, automating Terraform, IP/DNS, and Kubernetes deployment, with Jira, Slack, and vCenter integrations tracking the full ticket-to-deployment lifecycle.
          </p>
        </div>

        {/* Amazon 2025 */}
        <div className="mb-10">
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
          <p className="text-slate-500 font-et_book text-base mb-2">
            Software Engineer Intern
          </p>
          <p className="font-et_book text-base leading-7">
            Built a Java service validating 10M+ transactions/month at Amazon's receivables API entrypoint, and designed a config framework for onboarding new billing attributes that replaced code deployments with config changes, improving validation performance by 60%.
          </p>
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
            Migrated a clinical NLP dosing app to a containerized Python microservice on AKS, accelerating feature releases, and built a patching tool with Ansible and Jenkins to orchestrate remediation for 500+ Linux hosts.
          </p>
        </div>

        {/* Amazon 2024 */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1 gap-y-1.5">
            <h3 className="font-et_book text-base">Amazon</h3>
            <div className="flex items-baseline flex-wrap gap-x-2 gap-y-1">
              <span className="bg-slate-100 font-et_book text-sm px-2 py-0.5 rounded whitespace-nowrap">
                Seattle, WA
              </span>
              <span className="bg-slate-100 font-et_book text-sm px-2 py-0.5 rounded whitespace-nowrap">
                May 2024 – Aug 2024
              </span>
            </div>
          </div>
          <p className="text-slate-500 font-et_book text-base mb-2">
            Software Engineer Intern
          </p>
          <p className="font-et_book text-base leading-7">
            Built a Java metric aggregation service ensuring timely delivery for 100K+ invoices/month, an AWS Lambda automating Elasticsearch metric propagation into CloudWatch, and an AWS CDK module provisioning services in VPC.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
