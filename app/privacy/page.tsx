import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | SnapTik - TikTok Video Downloader',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information when you use SnapTik.',
}

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose prose-lg">
        <p>Last updated: December 31, 2024</p>
        <p>
          At SnapTik, we are committed to protecting your privacy and ensuring the security of your personal information. 
          This Privacy Policy explains how we collect, use, and safeguard your data when you use our TikTok video downloading service.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect minimal information necessary to provide our service. This includes:
        </p>
        <ul>
          <li>TikTok video URLs that you submit for downloading</li>
          <li>IP addresses for security and abuse prevention</li>
          <li>Usage data such as browser type and device information</li>
        </ul>
        <h2>How We Use Your Information</h2>
        <p>
          We use the collected information solely for the purpose of:
        </p>
        <ul>
          <li>Providing the video downloading service</li>
          <li>Improving our website and user experience</li>
          <li>Ensuring the security and integrity of our service</li>
        </ul>
        <h2>Data Retention</h2>
        <p>
          We do not store the videos you download or any personal information beyond the duration necessary to provide the service.
        </p>
        <h2>Third-Party Services</h2>
        <p>
          We may use third-party services for analytics and security purposes. These services may collect and process data according to their own privacy policies.
        </p>
        <h2>Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.
        </p>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at privacy@snaptik.app.
        </p>
      </div>
    </div>
  )
}

