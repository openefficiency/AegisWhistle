import React, { useState } from 'react';
import { Shield, ExternalLink, Mail, Phone, MapPin, X, Globe, Volume2, Link2, Zap, Sparkles, Workflow, FileText, Users, Scale, TrendingUp, Building, Gavel } from 'lucide-react';
import PilotWaitlistModal from './PilotWaitlistModal';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="text-gray-300 leading-relaxed whitespace-pre-line">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: string }>({
    isOpen: false,
    type: ''
  });

  const openLegalModal = (type: string) => {
    setLegalModal({ isOpen: true, type });
  };

  const closeLegalModal = () => {
    setLegalModal({ isOpen: false, type: '' });
  };

  const getLegalContent = (type: string) => {
    switch (type) {
      case 'terms':
        return {
          title: 'Terms of Service',
          content: `AEGIS AI 📣 TERMS OF SERVICE

Last Updated: January 2025

1. ACCEPTANCE OF TERMS
By accessing or using Aegis AI 📣 services, you agree to be bound by these Terms of Service and all applicable laws and regulations.

2. DESCRIPTION OF SERVICE
Aegis AI 📣 provides AI-powered employee engagement and whistleblower protection services, including:
- Anonymous reporting systems
- AI-driven case analysis and triage
- Secure communication channels
- Blockchain-based evidence preservation

3. USER RESPONSIBILITIES
- Provide accurate information when submitting reports
- Use the service only for legitimate whistleblowing purposes
- Respect the confidentiality of the platform
- Comply with all applicable laws and regulations

4. PRIVACY AND ANONYMITY
- We guarantee complete anonymity for all users
- No personal identifying information is collected or stored
- All communications are encrypted end-to-end
- Reports are processed through secure, anonymous channels

5. PROHIBITED USES
- False or malicious reporting
- Harassment or defamation
- Violation of applicable laws
- Attempts to compromise system security

6. LIMITATION OF LIABILITY
Aegis AI 📣 provides services "as is" without warranties. We are not liable for indirect, incidental, or consequential damages.

7. MODIFICATIONS
We reserve the right to modify these terms at any time. Continued use constitutes acceptance of modified terms.

8. GOVERNING LAW
These terms are governed by the laws of California, United States.

For questions about these terms, contact: Info@OpenEfficiency.Org`
        };
      case 'privacy':
        return {
          title: 'Privacy Policy',
          content: `AEGIS AI 📣 PRIVACY POLICY

Last Updated: January 2025

1. COMMITMENT TO PRIVACY
Aegis AI 📣 is built on the principle of absolute anonymity. We do not collect, store, or process any personally identifiable information.

2. INFORMATION WE DO NOT COLLECT
- Names, email addresses, or contact information
- IP addresses or device identifiers
- Location data or tracking information
- Biometric or personal identifying data

3. ANONYMOUS REPORTING
- All reports are submitted through encrypted, anonymous channels
- No user accounts or registration required
- Communications routed through Tor networks
- Zero-knowledge architecture ensures complete anonymity

4. DATA PROCESSING
- Reports processed using AI for pattern recognition only
- No personal data extracted or analyzed
- Blockchain storage for evidence integrity, not identification
- Automatic data purging after case resolution

5. SECURITY MEASURES
- Military-grade encryption (AES-256)
- End-to-end encrypted communications
- Tor network routing for anonymity
- Zero-knowledge proof systems
- Regular security audits and penetration testing

6. THIRD-PARTY SERVICES
- We do not share data with third parties
- No advertising or tracking partners
- Independent security infrastructure
- No government backdoors or data sharing

7. DATA RETENTION
- Reports retained only as long as necessary for investigation
- Automatic deletion after case closure
- No permanent storage of user data
- Regular data purging protocols

8. YOUR RIGHTS
- Complete anonymity guaranteed
- No data to access, modify, or delete
- Right to report without fear of identification
- Protection under whistleblower laws

9. CONTACT
For privacy questions: Info@OpenEfficiency.Org

This policy reflects our unwavering commitment to protecting whistleblowers and ensuring complete anonymity.`
        };
      case 'security':
        return {
          title: 'Security',
          content: `AEGIS AI 📣 SECURITY FRAMEWORK

Last Updated: January 2025

1. SECURITY OVERVIEW
Aegis AI 📣 employs military-grade security measures to protect user anonymity and data integrity.

2. ENCRYPTION STANDARDS
- AES-256 encryption for all data at rest
- TLS 1.3 for data in transit
- End-to-end encryption for all communications
- Perfect forward secrecy implementation

3. ANONYMITY PROTECTION
- Tor network integration for IP masking
- Zero-knowledge proof systems
- Anonymous credential systems
- Traffic analysis resistance

4. INFRASTRUCTURE SECURITY
- Distributed architecture across multiple jurisdictions
- No single point of failure
- Regular security audits by independent firms
- Penetration testing every quarter

5. BLOCKCHAIN SECURITY
- Hyperledger Fabric for evidence integrity
- IPFS for distributed storage
- Cryptographic hashing for tamper detection
- Multi-signature validation

6. ACCESS CONTROLS
- Zero-trust security model
- Multi-factor authentication for administrators
- Role-based access controls
- Regular access reviews and audits

7. INCIDENT RESPONSE
- 24/7 security monitoring
- Automated threat detection
- Incident response team on standby
- Regular security drills and testing

8. COMPLIANCE
- SOC 2 Type II certified
- GDPR compliant (where applicable)
- Whistleblower protection law compliance
- Regular compliance audits

9. VULNERABILITY MANAGEMENT
- Continuous vulnerability scanning
- Responsible disclosure program
- Bug bounty program for security researchers
- Regular security updates and patches

10. PHYSICAL SECURITY
- Secure data centers with biometric access
- 24/7 physical security monitoring
- Environmental controls and redundancy
- Secure hardware destruction protocols

For security concerns: Info@OpenEfficiency.Org

Our security measures are continuously updated to address emerging threats and maintain the highest levels of protection.`
        };
      default:
        return { title: '', content: '' };
    }
  };

  const currentLegalContent = getLegalContent(legalModal.type);

  return (
    <>
      <footer className="bg-gradient-to-br from-red-900 via-gray-900 to-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-white" />
                <span className="text-xl font-bold text-white">Aegis AI 📣</span>
              </div>
              
              {/* Large Tagline */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Built by Whistleblowers<br />
                  <span className="text-blue-400">For Whistleblowers</span>
                </h2>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <a 
                    href="mailto:Info@OpenEfficiency.Org"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Info@OpenEfficiency.Org
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <a 
                    href="tel:+16695775524"
                    className="text-sm hover:text-white transition-colors"
                  >
                    +1 (669) 577‑5524
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Made in San Francisco with ❤️</span>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.osha.gov/workers/file-complaint" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <Shield className="w-3 h-3 text-blue-400" />
                    <span>Safety Resources</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.whistleblowers.org/find-a-whisteblower-attorney/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <Gavel className="w-3 h-3 text-orange-400" />
                    <span>Find a Whistleblower Attorney</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.whistleblowers.org/whistleblower-resources/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <Users className="w-3 h-3 text-green-400" />
                    <span>Whistleblower Resources</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.pogo.org/whistleblower-resources" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <FileText className="w-3 h-3 text-purple-400" />
                    <span>POGO Whistleblower Resources</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.eff.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <Shield className="w-3 h-3 text-cyan-400" />
                    <span>Electronic Frontier Foundation</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.lexology.com/library/detail.aspx?g=8afb9964-07da-4f93-b55b-1c8dacd16020" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <Scale className="w-3 h-3 text-yellow-400" />
                    <span>Whistleblower Legal Guide</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal & Protection */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal & Protection</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.whistleblowers.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <Shield className="w-3 h-3 text-emerald-400" />
                    <span>Whistleblower Aid</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.sec.gov/whistleblower" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <Building className="w-3 h-3 text-blue-400" />
                    <span>SEC Whistleblower Program</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://whistleblower.gov" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <Globe className="w-3 h-3 text-red-400" />
                    <span>Whistleblower.Gov</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://whistleblower.house.gov/resources/resources-whistleblowers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <Users className="w-3 h-3 text-pink-400" />
                    <span>Federal Whistleblower Programs</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.acfe.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <TrendingUp className="w-3 h-3 text-orange-400" />
                    <span>ACFE (Fraud Examiners)</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.transparency.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <Globe className="w-3 h-3 text-teal-400" />
                    <span>Transparency International</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Technology Partners - Reordered */}
            <div>
              <h3 className="text-white font-semibold mb-4">Technology</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://bolt.new" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <Sparkles className="w-3 h-3 text-blue-400" />
                    <span>Bolt.new</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://elevenlabs.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <span className="text-lg">📣</span>
                    <span>ElevenLabs AI</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://n8n.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <Workflow className="w-3 h-3 text-green-400" />
                    <span>n8n.io</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://openefficiency.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <Zap className="w-3 h-3 text-yellow-400" />
                    <span>OpenEfficiency.org (Blockchain)</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.hyperledger.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <Link2 className="w-3 h-3 text-cyan-400" />
                    <span>Hyperledger Foundation</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.torproject.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                  >
                    <Globe className="w-3 h-3 text-purple-400" />
                    <span>Tor Project</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 AegisWhistle LLC. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => openLegalModal('terms')}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => openLegalModal('privacy')}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => openLegalModal('security')}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Security
                </button>
                <button 
                  onClick={() => setIsWaitlistModalOpen(true)}
                  className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  Apply for Aegis AI 📣 Pilot Waitlist
                </button>
              </div>
            </div>
            
            {/* Security Notice */}
            <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg backdrop-blur-sm">
              <p className="text-gray-300 text-sm text-center">
                <span className="text-green-400 font-semibold">🔒 Military-grade Security:</span> 
                All communications are encrypted end-to-end. Your identity remains completely anonymous through Tor networks and zero-knowledge proofs.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <PilotWaitlistModal 
        isOpen={isWaitlistModalOpen} 
        onClose={() => setIsWaitlistModalOpen(false)} 
      />

      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={closeLegalModal}
        title={currentLegalContent.title}
        content={currentLegalContent.content}
      />
    </>
  );
};

export default Footer;