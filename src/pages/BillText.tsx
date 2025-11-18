import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const BillText = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              The Citizens' Digital Rights Act of 2025
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              H.R. 2025 - 119th Congress (2025-2026)
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
              <Button variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Bill Text */}
          <div className="bg-card rounded-lg shadow-lg p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-card-foreground border-b-2 border-primary pb-2">
                Section 1: Short Title
              </h2>
              <p className="text-card-foreground leading-relaxed">
                This Act may be cited as the "Citizens' Digital Rights Act of 2025".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-card-foreground border-b-2 border-primary pb-2">
                Section 2: Findings and Purpose
              </h2>
              <div className="space-y-4 text-card-foreground leading-relaxed">
                <p className="font-semibold">(a) FINDINGS.—Congress finds the following:</p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>
                    In the modern digital economy, personal data has become one of the most valuable 
                    commodities, yet citizens lack meaningful control over how their information is 
                    collected, used, and shared.
                  </li>
                  <li>
                    Algorithmic decision-making systems increasingly determine access to employment, 
                    credit, housing, and other essential services, often without transparency or 
                    accountability.
                  </li>
                  <li>
                    Data breaches affecting millions of citizens have become commonplace, yet inadequate 
                    legal protections leave individuals vulnerable to identity theft and other harms.
                  </li>
                  <li>
                    Current patchwork regulations create confusion and fail to provide consistent 
                    protections across all states and sectors.
                  </li>
                  <li>
                    Protecting digital privacy rights is essential to preserving individual liberty, 
                    democratic participation, and economic fairness in the 21st century.
                  </li>
                </ol>
                <p className="font-semibold mt-6">(b) PURPOSE.—The purposes of this Act are:</p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>
                    To establish comprehensive federal protections for personal data privacy and security.
                  </li>
                  <li>
                    To ensure transparency in automated decision-making systems that affect citizens' lives.
                  </li>
                  <li>
                    To create meaningful enforcement mechanisms with sufficient deterrent effect.
                  </li>
                  <li>
                    To empower individuals with practical tools to exercise their digital rights.
                  </li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-card-foreground border-b-2 border-primary pb-2">
                Section 3: Definitions
              </h2>
              <div className="space-y-3 text-card-foreground leading-relaxed">
                <p>In this Act:</p>
                <div className="ml-4 space-y-3">
                  <p>
                    <span className="font-semibold">(1) COVERED ENTITY.—</span>
                    The term "covered entity" means any person or organization that collects, processes, 
                    or stores personal data of 1,000 or more individuals annually.
                  </p>
                  <p>
                    <span className="font-semibold">(2) PERSONAL DATA.—</span>
                    The term "personal data" means any information that identifies, relates to, describes, 
                    or is capable of being associated with a particular individual, including but not 
                    limited to name, address, telephone number, email address, social security number, 
                    biometric data, browsing history, and geolocation data.
                  </p>
                  <p>
                    <span className="font-semibold">(3) ALGORITHMIC DECISION SYSTEM.—</span>
                    The term "algorithmic decision system" means any computational process, including 
                    those derived from machine learning, statistics, or artificial intelligence, that 
                    makes or substantially facilitates a decision that has a legal or similarly 
                    significant effect on individuals.
                  </p>
                  <p>
                    <span className="font-semibold">(4) DATA BREACH.—</span>
                    The term "data breach" means unauthorized access to or acquisition of personal data 
                    that compromises the security, confidentiality, or integrity of such data.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-card-foreground border-b-2 border-primary pb-2">
                Section 4: Individual Rights
              </h2>
              <div className="space-y-4 text-card-foreground leading-relaxed">
                <p className="font-semibold">(a) RIGHT TO KNOW.—</p>
                <p className="ml-4">
                  Every individual shall have the right to request and receive information about what 
                  personal data a covered entity has collected about them, the sources of that data, 
                  the purposes for which it is used, and the categories of third parties with whom it 
                  has been shared.
                </p>
                
                <p className="font-semibold mt-4">(b) RIGHT TO DELETE.—</p>
                <p className="ml-4">
                  Every individual shall have the right to request deletion of their personal data, 
                  subject only to limited exceptions necessary for legal compliance, fraud prevention, 
                  or exercising free speech rights.
                </p>
                
                <p className="font-semibold mt-4">(c) RIGHT TO DATA PORTABILITY.—</p>
                <p className="ml-4">
                  Every individual shall have the right to obtain their personal data in a structured, 
                  commonly used, and machine-readable format that enables transfer to another service 
                  provider.
                </p>
                
                <p className="font-semibold mt-4">(d) RIGHT TO OPT OUT.—</p>
                <p className="ml-4">
                  Every individual shall have the right to opt out of the sale or sharing of their 
                  personal data with third parties, as well as the use of their data for targeted 
                  advertising or profiling.
                </p>
                
                <p className="font-semibold mt-4">(e) RIGHT TO EQUAL SERVICE.—</p>
                <p className="ml-4">
                  Covered entities shall not discriminate against individuals who exercise their rights 
                  under this Act by charging different prices, providing different levels of service, 
                  or denying goods or services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-card-foreground border-b-2 border-primary pb-2">
                Section 5: Obligations of Covered Entities
              </h2>
              <div className="space-y-4 text-card-foreground leading-relaxed">
                <p className="font-semibold">(a) TRANSPARENCY REQUIREMENTS.—</p>
                <p className="ml-4">
                  Covered entities must provide clear, conspicuous, and easily accessible privacy 
                  notices that explain in plain language their data collection, use, and sharing practices.
                </p>
                
                <p className="font-semibold mt-4">(b) CONSENT REQUIREMENTS.—</p>
                <p className="ml-4">
                  Covered entities must obtain affirmative express consent before collecting sensitive 
                  personal data or sharing personal data with third parties, except as necessary to 
                  provide requested services.
                </p>
                
                <p className="font-semibold mt-4">(c) DATA MINIMIZATION.—</p>
                <p className="ml-4">
                  Covered entities shall collect only personal data that is reasonably necessary and 
                  proportionate to the purposes for which it is processed, and shall retain such data 
                  no longer than necessary.
                </p>
                
                <p className="font-semibold mt-4">(d) SECURITY SAFEGUARDS.—</p>
                <p className="ml-4">
                  Covered entities must implement reasonable security measures appropriate to the 
                  sensitivity and volume of personal data they maintain, including encryption, access 
                  controls, and regular security assessments.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-card-foreground border-b-2 border-primary pb-2">
                Section 6: Algorithmic Accountability
              </h2>
              <div className="space-y-4 text-card-foreground leading-relaxed">
                <p className="font-semibold">(a) IMPACT ASSESSMENTS.—</p>
                <p className="ml-4">
                  Covered entities deploying algorithmic decision systems in high-risk domains including 
                  employment, credit, housing, education, healthcare, or criminal justice must conduct 
                  and publicly disclose impact assessments evaluating potential discriminatory effects 
                  and accuracy.
                </p>
                
                <p className="font-semibold mt-4">(b) RIGHT TO EXPLANATION.—</p>
                <p className="ml-4">
                  Individuals subject to consequential decisions made by algorithmic systems shall have 
                  the right to receive a clear explanation of the factors and logic involved in reaching 
                  that decision.
                </p>
                
                <p className="font-semibold mt-4">(c) HUMAN REVIEW.—</p>
                <p className="ml-4">
                  For decisions with significant legal or similarly significant effects, individuals 
                  shall have the right to request human review and to contest algorithmic decisions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-card-foreground border-b-2 border-primary pb-2">
                Section 7: Data Breach Notification
              </h2>
              <div className="space-y-4 text-card-foreground leading-relaxed">
                <p className="font-semibold">(a) NOTIFICATION TO INDIVIDUALS.—</p>
                <p className="ml-4">
                  In the event of a data breach, covered entities must notify affected individuals 
                  within 72 hours of discovery, providing clear information about what data was 
                  compromised and what steps individuals should take to protect themselves.
                </p>
                
                <p className="font-semibold mt-4">(b) NOTIFICATION TO REGULATORY AUTHORITY.—</p>
                <p className="ml-4">
                  Covered entities must also notify the Federal Trade Commission and state attorneys 
                  general within 72 hours of discovering a breach affecting more than 500 individuals.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-card-foreground border-b-2 border-primary pb-2">
                Section 8: Enforcement and Penalties
              </h2>
              <div className="space-y-4 text-card-foreground leading-relaxed">
                <p className="font-semibold">(a) FEDERAL TRADE COMMISSION AUTHORITY.—</p>
                <p className="ml-4">
                  The Federal Trade Commission shall have primary enforcement authority under this Act, 
                  including the power to investigate violations, issue regulations, and impose civil 
                  penalties.
                </p>
                
                <p className="font-semibold mt-4">(b) CIVIL PENALTIES.—</p>
                <div className="ml-4 space-y-2">
                  <p>(1) Violations of this Act shall be subject to civil penalties of:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Up to $10,000 per violation for negligent violations</li>
                    <li>Up to $25,000 per violation for knowing violations</li>
                    <li>Up to $50,000 per violation for willful or repeated violations</li>
                  </ul>
                  <p className="mt-2">
                    (2) In determining penalty amounts, the Commission shall consider the nature, 
                    circumstances, extent, and gravity of the violation, as well as the violator's 
                    ability to pay, effect on operations, and good faith efforts to comply.
                  </p>
                </div>
                
                <p className="font-semibold mt-4">(c) PRIVATE RIGHT OF ACTION.—</p>
                <p className="ml-4">
                  Individuals may bring civil actions for violations of this Act and recover statutory 
                  damages of not less than $1,000 per violation, actual damages, or injunctive relief.
                </p>
                
                <p className="font-semibold mt-4">(d) STATE ENFORCEMENT.—</p>
                <p className="ml-4">
                  State attorneys general may bring actions on behalf of state residents to enforce 
                  this Act and secure remedies for violations.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-card-foreground border-b-2 border-primary pb-2">
                Section 9: Effective Date
              </h2>
              <p className="text-card-foreground leading-relaxed">
                This Act shall take effect 180 days after the date of enactment, except that the 
                Federal Trade Commission may issue regulations and guidance during this period to 
                facilitate implementation.
              </p>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-primary to-civic-blue text-primary-foreground rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Support This Legislation</h2>
              <p className="text-lg mb-6 opacity-90">
                Help make digital rights a reality for all citizens
              </p>
              <Link to="/support">
                <Button size="lg" variant="secondary">
                  Take Action Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Citizens' Digital Rights Campaign</p>
          <p className="text-sm opacity-75">
            A grassroots movement for digital privacy and transparency
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BillText;
