import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    // Cuộn lên đầu trang khi vào trang này
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen w-full relative z-50 pt-20 pb-12 px-6 sm:px-12 md:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 font-sans uppercase">
          PRIVACY POLICY
        </h1>
        <p className="text-sm text-gray-500 mb-8 font-semibold">
          Last updated: 20/3/2026
        </p>
        
        <div className="space-y-6 text-gray-800 font-sans leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p>
            K2 Vanguard (“we”, “us”, or “our”) is committed to protecting your privacy and personal data.
            <br />
            This Privacy Policy explains how we collect, use, store, and protect your information when you:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access our website</li>
            <li>Use our products, games, or services</li>
            <li>Interact with our systems and community</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
          
          <h3 className="text-lg sm:text-xl font-bold mt-6 mb-3">2.1. Information You Provide</h3>
          <p>We may collect the following information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Full name</li>
            <li>Email address</li>
            <li>Social media accounts (e.g., Discord)</li>
            <li>Feedback, survey responses, or support requests</li>
          </ul>

          <h3 className="text-lg sm:text-xl font-bold mt-6 mb-3">2.2. Automatically Collected Information</h3>
          <p>When you use our website or products, we may automatically collect:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>IP address</li>
            <li>Device type and operating system</li>
            <li>Browser type</li>
            <li>Access time</li>
            <li>Usage behavior (clicks, sessions, interactions)</li>
          </ul>

          <h3 className="text-lg sm:text-xl font-bold mt-6 mb-3">2.3. In-Game Data</h3>
          <p>For our games, we may collect:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Playtime</li>
            <li>Player progression</li>
            <li>In-game actions (resource gathering, crafting, combat, death, etc.)</li>
          </ul>
          <p className="font-medium text-gray-700">
            👉 This data is used to improve gameplay, balance game systems, and enhance user experience.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Operate and improve our products and services</li>
            <li>Analyze user behavior to optimize experience</li>
            <li>Send updates and notifications (if you opt in)</li>
            <li>Provide customer support</li>
            <li>Ensure system security and integrity</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">4. Information Sharing</h2>
          <p>
            K2 Vanguard does not sell or trade your personal information.
            <br />
            We only share your data in the following cases:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>With service providers (hosting, analytics, system operations)</li>
            <li>When required by law or legal authorities</li>
            <li>To protect our legal rights and interests</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">5. Data Storage and Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your data, including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Secure server infrastructure</li>
            <li>Access control systems</li>
            <li>Data encryption when necessary</li>
          </ul>
          <p>However, no system can guarantee absolute security.</p>

          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Request access to your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Withdraw consent (where applicable)</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
          <p>Our website may use cookies to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Remember user sessions</li>
            <li>Analyze user behavior</li>
            <li>Improve performance and user experience</li>
          </ul>
          <p>You can manage or disable cookies through your browser settings.</p>

          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">8. Children’s Data</h2>
          <p>
            Our products are not intended for children under the age of 13.
            <br />
            We do not knowingly collect data from children.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">9. Changes to This Policy</h2>
          <p>
            K2 Vanguard may update this Privacy Policy from time to time.
            <br />
            Any changes will be posted on this page.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
          <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
          <ul className="list-none space-y-1">
            <li><strong>Email:</strong> <a href="mailto:k2saintvanguard@gmail.com" className="text-blue-600 hover:underline">k2saintvanguard@gmail.com</a></li>
            <li><strong>Website:</strong> <a href="/" className="text-blue-600 hover:underline">[yourwebsite.com]</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Terms;
