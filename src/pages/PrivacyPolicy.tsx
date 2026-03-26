import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy | RentRefi";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "RentRefi privacy policy. Learn how RENTREFI, LLC collects, uses, and protects your personal information and SMS communications data.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "RentRefi privacy policy. Learn how RENTREFI, LLC collects, uses, and protects your personal information and SMS communications data.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-scene" />
      <SiteHeader />
      <main className="mx-auto max-w-[800px] px-6 py-24 text-[#E8EAF2]">
        <h1 className="mb-2 text-4xl font-bold text-white">Privacy Policy</h1>
        <p className="mb-12 text-[#6B7594]">Last Updated: March 26, 2026</p>

        <p className="mb-8 leading-relaxed">
          RENTREFI, LLC ("RentRefi," "we," "our," or "us") operates rentrefi.com
          and provides DSCR lending services to real estate investors. This
          Privacy Policy describes how we collect, use, and share information
          about you when you visit our website or interact with our services.
        </p>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            1. Information We Collect
          </h2>
          <p className="mb-4 leading-relaxed">
            We collect information you provide directly to us, including:
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-white">Contact information:</strong> name,
              email address, phone number, mailing address
            </li>
            <li>
              <strong className="text-white">Financial information:</strong>{" "}
              property details, loan inquiry information, estimated rental
              income, property value
            </li>
            <li>
              <strong className="text-white">Communications:</strong> messages
              you send us via form submissions, email, or SMS
            </li>
          </ul>
          <p className="leading-relaxed">
            We also collect certain information automatically when you visit our
            website, including IP address, browser type, pages visited, and
            referring URLs via cookies and similar tracking technologies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            2. How We Use Your Information
          </h2>
          <p className="mb-4 leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Respond to your loan pre-qualification inquiries</li>
            <li>
              Communicate with you about your application or loan options via
              email, phone, or SMS (if you have opted in)
            </li>
            <li>
              Send appointment reminders and follow-up messages related to your
              inquiry
            </li>
            <li>Improve our website and services</li>
            <li>Comply with applicable laws and regulations</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            3. SMS Communications
          </h2>
          <p className="mb-4 leading-relaxed">
            If you provide your phone number and opt in to SMS communications on
            our pre-qualification form, you consent to receive text messages from
            RENTREFI, LLC at the phone number you provide. These messages may
            include:
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-6">
            <li>Speed-to-lead follow-up from our team</li>
            <li>Appointment reminders</li>
            <li>Educational information about DSCR lending</li>
          </ul>
          <p className="mb-4 leading-relaxed">
            <strong className="text-white">Message frequency varies.</strong>{" "}
            Message and data rates may apply.
          </p>
          <p className="mb-4 leading-relaxed">
            <strong className="text-white">To opt out:</strong> Reply{" "}
            <strong className="text-white">STOP</strong> to any SMS message at
            any time. You will receive a one-time confirmation and no further
            messages will be sent.
          </p>
          <p className="mb-4 leading-relaxed">
            <strong className="text-white">For help:</strong> Reply{" "}
            <strong className="text-white">HELP</strong> or contact us at{" "}
            <a
              href="mailto:info@rentrefi.com"
              className="text-[#00E5A0] underline hover:text-[#00C77A]"
            >
              info@rentrefi.com
            </a>
            .
          </p>
          <p className="leading-relaxed">
            We do not sell, rent, or share your phone number or SMS opt-in data
            with third parties for their marketing purposes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            4. Sharing of Information
          </h2>
          <p className="mb-4 leading-relaxed">
            We do not sell your personal information. We may share your
            information with:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-white">Service providers</strong> who
              assist us in operating our website and delivering our services
              (e.g., CRM platforms, SMS delivery providers), subject to
              confidentiality obligations
            </li>
            <li>
              <strong className="text-white">
                Legal and regulatory authorities
              </strong>{" "}
              when required by law or to protect our legal rights
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            5. Data Retention
          </h2>
          <p className="leading-relaxed">
            We retain your information for as long as necessary to fulfill the
            purposes described in this policy, or as required by law. You may
            request deletion of your data by contacting us at the information
            below.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            6. Your Rights
          </h2>
          <p className="mb-4 leading-relaxed">
            Depending on your state of residence, you may have the right to:
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-6">
            <li>Access the personal information we hold about you</li>
            <li>Request correction or deletion of your information</li>
            <li>
              Opt out of SMS communications at any time by replying STOP
            </li>
          </ul>
          <p className="leading-relaxed">
            To exercise any of these rights, contact us at{" "}
            <a
              href="mailto:info@rentrefi.com"
              className="text-[#00E5A0] underline hover:text-[#00C77A]"
            >
              info@rentrefi.com
            </a>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            7. Cookies
          </h2>
          <p className="leading-relaxed">
            Our website may use cookies and similar technologies to enhance your
            browsing experience. You can control cookie settings through your
            browser.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            8. Children's Privacy
          </h2>
          <p className="leading-relaxed">
            Our services are not directed to individuals under the age of 18. We
            do not knowingly collect personal information from minors.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            9. Changes to This Policy
          </h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. We will post
            the updated policy on this page with a revised "Last Updated" date.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            10. Contact Us
          </h2>
          <p className="leading-relaxed">
            If you have questions about this Privacy Policy or our data
            practices, contact us:
          </p>
          <p className="mt-4 leading-relaxed">
            <strong className="text-white">RENTREFI, LLC</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:info@rentrefi.com"
              className="text-[#00E5A0] underline hover:text-[#00C77A]"
            >
              info@rentrefi.com
            </a>
            <br />
            Website:{" "}
            <a
              href="https://rentrefi.com"
              className="text-[#00E5A0] underline hover:text-[#00C77A]"
            >
              rentrefi.com
            </a>
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default PrivacyPolicy;
