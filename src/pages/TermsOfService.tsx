import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service | RentRefi";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "RentRefi terms of service. Review the terms governing your use of rentrefi.com and DSCR lending services provided by RENTREFI, LLC.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "RentRefi terms of service. Review the terms governing your use of rentrefi.com and DSCR lending services provided by RENTREFI, LLC.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-scene" />
      <SiteHeader />
      <main className="mx-auto max-w-[800px] px-6 py-24 text-[#E8EAF2]">
        <h1 className="mb-2 text-4xl font-bold text-white">
          Terms of Service
        </h1>
        <p className="mb-12 text-[#6B7594]">Last Updated: March 26, 2026</p>

        <p className="mb-8 leading-relaxed">
          These Terms of Service ("Terms") govern your use of the website
          located at rentrefi.com and any related services provided by RENTREFI,
          LLC ("RentRefi," "we," "our," or "us"). By accessing our website or
          submitting a pre-qualification form, you agree to these Terms.
        </p>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            1. Use of Our Website
          </h2>
          <p className="leading-relaxed">
            You agree to use rentrefi.com only for lawful purposes. You may not
            use our site to submit false or misleading information, attempt to
            gain unauthorized access to our systems, or interfere with the
            operation of our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            2. Pre-Qualification Forms
          </h2>
          <p className="leading-relaxed">
            Submitting a pre-qualification form does not constitute a loan
            application or guarantee of financing. Pre-qualification inquiries
            are for informational purposes only. Actual loan terms are subject to
            underwriting, property eligibility, and lender approval.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            3. SMS Communications Consent
          </h2>
          <p className="mb-4 leading-relaxed">
            By checking the SMS consent checkbox on our pre-qualification form,
            you expressly consent to receive text messages from RENTREFI, LLC at
            the phone number you provide. These messages may be sent using
            automated technology.
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-6">
            <li>
              Message frequency varies based on your inquiry status.
            </li>
            <li>Message and data rates may apply.</li>
            <li>
              You may opt out at any time by replying{" "}
              <strong className="text-white">STOP</strong>.
            </li>
            <li>
              Reply <strong className="text-white">HELP</strong> for assistance
              or contact{" "}
              <a
                href="mailto:info@rentrefi.com"
                className="text-[#00E5A0] underline hover:text-[#00C77A]"
              >
                info@rentrefi.com
              </a>
              .
            </li>
          </ul>
          <p className="leading-relaxed">
            Opting out of SMS will not affect your ability to receive other
            communications from us.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            4. No Legal or Financial Advice
          </h2>
          <p className="leading-relaxed">
            Content on rentrefi.com is for informational purposes only and does
            not constitute legal, financial, or investment advice. Consult a
            qualified professional before making any financing or real estate
            investment decisions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            5. Intellectual Property
          </h2>
          <p className="leading-relaxed">
            All content on rentrefi.com, including text, graphics, logos, and
            design elements, is the property of RENTREFI, LLC and may not be
            reproduced without written permission.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            6. Disclaimer of Warranties
          </h2>
          <p className="leading-relaxed">
            Our website and services are provided "as is" without warranties of
            any kind, express or implied. We do not guarantee the accuracy or
            completeness of any information on the site.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            7. Limitation of Liability
          </h2>
          <p className="leading-relaxed">
            To the fullest extent permitted by law, RENTREFI, LLC shall not be
            liable for any indirect, incidental, or consequential damages
            arising from your use of our website or services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            8. Governing Law
          </h2>
          <p className="leading-relaxed">
            These Terms are governed by the laws of the State of Missouri,
            without regard to its conflict of law principles.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            9. Changes to These Terms
          </h2>
          <p className="leading-relaxed">
            We may update these Terms at any time. Continued use of our website
            after changes are posted constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            10. Contact Us
          </h2>
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

export default TermsOfService;
