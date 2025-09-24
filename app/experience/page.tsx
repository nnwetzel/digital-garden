
"use client";
import Navbar from "../../components/Navbar";
import PageLayout from "../../components/page-layout";
import React from "react";

export default function Experience() {
  return (
    <>
      <Navbar />
            <PageLayout headline="Experience">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5em', width: '100%' }}>
                    {/* Amazon 2025 */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 0 }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.05em', margin: 0 }}>Amazon</h3>
              <p style={{ color: '#000', margin: 0, fontWeight: 300 }}>2025/06 - 2025/09</p>
            </div>
            <div style={{ margin: 0 }}><em>Software Engineer Intern</em></div>
            <p style={{ margin: '0.5em 0 0 0' }}>
              <span style={{ color: '#f59e42' }}>● </span><span style={{ color: '#f59e42' }}>Java</span>
            </p>
            <p style={{ marginTop: '0.5em' }}>
              Developed a <span style={{ color: '#f59e42' }}>Java</span> service validating 10M+ transactions/month at Amazon's accounts receivable API entrypoint ensuring accuracy at scale across billions of dollars in billing.
            </p>
          </div>
          
          {/* Wolters Kluwer 2025 */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 0 }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.05em', margin: 0 }}>Wolters Kluwer</h3>
              <p style={{ color: '#000', margin: 0, fontWeight: 300 }}>2025/01 - 2025/06</p>
            </div>
            <div style={{ margin: 0 }}><em>Software Engineer Intern</em></div>
            <p style={{ margin: '0.5em 0 0 0' }}>
              <span style={{ color: '#22c55e' }}>● </span><span style={{ color: '#22c55e' }}>Python</span>
            </p>
            <p style={{ marginTop: '0.5em' }}>
              Migrated a clinical NLP dosing app for <a href="https://www.wolterskluwer.com/en/solutions/uptodate/pro/uptodate">UpToDate</a> to a <span style={{ color: '#22c55e' }}>Python</span> microservice on AKS, containerized with Docker processing 70MB+ of dosing data.
            </p>
          </div>

          {/* Amazon 2024 */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 0 }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.05em', margin: 0 }}>Amazon</h3>
              <p style={{ color: '#000', margin: 0, fontWeight: 300 }}>2024/05 - 2024/08</p>
            </div>
            <div style={{ margin: 0 }}><em>Software Engineer Intern</em></div>
            <p style={{ margin: '0.5em 0 0 0' }}>
              <span style={{ color: '#f59e42' }}>● </span><span style={{ color: '#f59e42' }}>Java</span>
            </p>
            <p style={{ marginTop: '0.5em' }}>
              Implemented a scalable <span style={{ color: '#f59e42' }}>Java</span> metric aggregation service used monthly to ensure SLA compliance for invoicing, ensuring timely invoice delivery for 100K+ invoices/month.
            </p>
          </div>
        </div>
      </PageLayout>
  </>
  );
}
