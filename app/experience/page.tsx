
"use client";
import Navbar from "../../components/Navbar";
import PageLayout from "../../components/page-layout";
import React from "react";

export default function Experience() {
  return (
    <>
      <Navbar />
      <PageLayout headline="Experience">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5em', fontFamily: 'Georgia, serif', fontWeight: 400, color: '#222', width: '100%' }}>
          {/* Amazon 2025 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-start', width: '100%' }}>
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', width: '100%' }}>
                  <span style={{ fontWeight: 700, fontSize: '1.18em', fontFamily: 'Georgia, serif', letterSpacing: '-0.01em' }}>Amazon</span>
                <span style={{ fontSize: '0.98em', color: '#888', fontFamily: 'Georgia, serif', marginLeft: '1em' }}>2025</span>
              </div>
              <div style={{ fontStyle: 'italic', color: '#444', fontSize: '1.08em', marginBottom: '0.5em', fontFamily: 'Georgia, serif', letterSpacing: '-0.01em' }}><em>Software Engineer Intern</em></div>
              <div style={{ display: 'flex', gap: '0.5em', marginBottom: '0.5em', alignItems: 'baseline' }}>
                  <span style={{ color: '#f59e42', fontWeight: 500, fontSize: '1em', fontFamily: 'Georgia, serif', lineHeight: '1' }}>&#9679;</span>
                  <span style={{ color: '#f59e42', fontWeight: 500, fontFamily: 'Georgia, serif', fontSize: '1em', lineHeight: '1' }}>Java</span>
              </div>
              <div style={{ fontSize: '1.08em', color: '#222', fontFamily: 'Georgia, serif', marginBottom: '0.5em', gridColumn: '1 / span 2', width: '100%' }}>
                Developed a <span style={{ color: '#f59e42', fontWeight: 500, fontFamily: 'Georgia, serif', fontSize: '1em', lineHeight: '1' }}>Java</span> service validating 10M+ transactions/month at Amazon's receivables API entrypoint. Eliminated invalid custom billing attributes ensuring accuracy at scale.
              </div>
            </div>
          </div>
          {/* Wolters Kluwer 2025 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-start', width: '100%' }}>
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', width: '100%' }}>
                  <span style={{ fontWeight: 700, fontSize: '1.18em', fontFamily: 'Georgia, serif', letterSpacing: '-0.01em' }}>Wolters Kluwer</span>
                <span style={{ fontSize: '0.98em', color: '#888', fontFamily: 'Georgia, serif', marginLeft: '1em' }}>2025</span>
              </div>
              <div style={{ fontStyle: 'italic', color: '#444', fontSize: '1.08em', marginBottom: '0.5em', fontFamily: 'Georgia, serif', letterSpacing: '-0.01em' }}><em>Software Engineer Intern</em></div>
              <div style={{ display: 'flex', gap: '0.5em', marginBottom: '0.5em', alignItems: 'center' }}>
                  <span style={{ color: '#22c55e', fontWeight: 500, fontSize: '1em', fontFamily: 'Georgia, serif', lineHeight: '1' }}>&#9679;</span>
                  <span style={{ color: '#22c55e', fontWeight: 500, fontFamily: 'Georgia, serif', fontSize: '1em', lineHeight: '1' }}>Python</span>
              </div>
              <div style={{ fontSize: '1.08em', color: '#222', fontFamily: 'Georgia, serif', marginBottom: '0.5em', gridColumn: '1 / span 2', width: '100%' }}>
                Migrated a clinical NLP application for dosing recommendations to a <span style={{ color: '#22c55e', fontWeight: 500, fontFamily: 'Georgia, serif', fontSize: '1em', lineHeight: '1' }}>Python</span> microservice on Azure Kubernetes Services.
              </div>
            </div>
          </div>
          {/* Amazon 2024 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-start', width: '100%' }}>
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', width: '100%' }}>
                <span style={{ fontWeight: 700, fontSize: '1.18em', fontFamily: 'Georgia, serif', letterSpacing: '-0.01em' }}>Amazon</span>
                <span style={{ fontSize: '0.98em', color: '#888', fontFamily: 'Georgia, serif', marginLeft: '1em' }}>2024</span>
              </div>
                <div style={{ fontStyle: 'italic', color: '#444', fontSize: '1.18em', marginBottom: '0.5em', fontFamily: 'Georgia, serif', letterSpacing: '-0.01em' }}><em>Software Engineer Intern</em></div>
              <div style={{ display: 'flex', gap: '0.5em', marginBottom: '0.5em', alignItems: 'center' }}>
                  <span style={{ color: '#f59e42', fontWeight: 500, fontSize: '1em', verticalAlign: 'middle' }}>&#9679;</span>
                  <span style={{ color: '#f59e42', fontWeight: 500, fontFamily: 'Georgia, serif', fontSize: '1em', verticalAlign: 'middle' }}>Java</span>
              </div>
              <div style={{ fontSize: '1.08em', color: '#222', fontFamily: 'Georgia, serif', marginBottom: '0.5em', gridColumn: '1 / span 2', width: '100%' }}>
                Implemented a metric aggregation service for 100K+ invoices/month with an AWS Lambda function in <span style={{ color: '#f59e42', fontWeight: 500, fontFamily: 'Georgia, serif', fontSize: '1em', lineHeight: '1' }}>Java</span> and infrastructure as code via AWS CDK.
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
  </>
  );
}
