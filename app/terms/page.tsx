import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | SnapTik - TikTok Video Downloader",
  description:
    "Read our terms of service to understand the rules and regulations governing the use of SnapTik, our TikTok video downloader.",
}

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose prose-lg">
        <p>Last updated: December 31, 2024</p>
        <p>
          Welcome to SnapTik. By using our service, you agree to comply with and
          be bound by the following terms and conditions. Please read these
          terms carefully before using SnapTik.
        </p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using SnapTik, you agree to be bound by these Terms of
          Service and all applicable laws and regulations. If you do not agree
          with any part of these terms, you may not use our service.
        </p>
        <h2>2. Use of Service</h2>
        <p>
          SnapTik is a service that allows users to download TikTok videos
          without watermarks. You agree to use this service only for personal,
          non-commercial purposes and in compliance with TikTok's terms of
          service.
        </p>
        <h2>3. User Responsibilities</h2>
        <p>You are responsible for:</p>
        <ul>
          <li>Ensuring you have the right to download and use the videos</li>
          <li>Not using our service for any illegal or unauthorized purpose</li>
          <li>Not interfering with or disrupting the service or servers</li>
        </ul>
        <h2>4. Intellectual Property</h2>
        <p>
          SnapTik respects intellectual property rights. By using our service,
          you warrant that you have the necessary rights or permissions to
          download and use the videos.
        </p>
        <h2>5. Limitation of Liability</h2>
        <p>
          SnapTik is provided "as is" without any warranties. We are not
          responsible for any damages or losses resulting from your use of our
          service.
        </p>
        <h2>6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Your continued
          use of SnapTik after changes are posted constitutes your acceptance of
          the modified terms.
        </p>
        <h2>7. Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with the
          laws of [Your Jurisdiction], without regard to its conflict of law
          provisions.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at terms@snaptik.app.
        </p>
      </div>
    </div>
  )
}
